import { useState, useEffect, useRef } from "react";
import { Image, View, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import * as FileSystem from "expo-file-system";
import { ResizeMode, Video } from "expo-av";

export default function MediaDownloader({ src, styless }) {
    const [localPath, setLocalPath] = useState(null);
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(true);
    const video = useRef(null);

    if (src.startsWith("https://odata.files.vitekform.cz/web_assets/non_essential/")) {
        src = src.replace("https://odata.files.vitekform.cz/web_assets/non_essential/", "");
        src = "https://odata.files.vitekform.cz/web_assets/non_essential/" + src;
    }

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const [dynamicWidth, setDynamicWidth] = useState(0);
    const [dynamicHeight, setDynamicHeight] = useState(0);

    useEffect(() => {
        // Determine media type
        if (src.endsWith(".jpg") || src.endsWith(".png")) {
            setType("image");
        } else if (src.endsWith(".mp4") || src.endsWith(".webm")) {
            setType("video");
        } else if (src.endsWith(".mp3") || src.endsWith(".wav") || src.endsWith(".ogg")) {
            setType("audio");
        } else {
            setType("");
        }
    }, [src]);

    useEffect(() => {
        // Download media
        async function downloadMedia() {
            const fileName = src.split('/').pop();
            const localFilePath = `${FileSystem.cacheDirectory}${fileName}`;

            try {
                const fileInfo = await FileSystem.getInfoAsync(localFilePath);

                if (fileInfo.exists) {
                    setLocalPath(localFilePath);
                } else {
                    const downloadResult = await FileSystem.downloadAsync(src, localFilePath);

                    if (downloadResult.status === 200) {
                        setLocalPath(localFilePath);
                    } else {
                        console.error("Failed to download media", downloadResult.status, src);
                    }
                }
            } catch (error) {
                console.error("Error downloading media:", error);
            } finally {
                setLoading(false);
            }
        }

        downloadMedia();
    }, [src]);

    useEffect(() => {
        // Adjust image dimensions
        if (type === "image" && localPath) {
            Image.getSize(localPath, (width, height) => {
                const aspectRatio = width / height;
                const maxWidth = screenWidth * 0.9;
                const maxHeight = screenHeight * 0.9;

                let newWidth = width;
                let newHeight = height;

                if (newWidth > maxWidth) {
                    newWidth = maxWidth;
                    newHeight = maxWidth / aspectRatio;
                }

                if (newHeight > maxHeight) {
                    newHeight = maxHeight;
                    newWidth = maxHeight * aspectRatio;
                }

                setDynamicWidth(newWidth);
                setDynamicHeight(newHeight);
            });
        }
    }, [localPath, type]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!localPath) {
        return null;
    }

    if (type === "image") {
        // If width or width arent set set them to dynamic
        if (!styless.width || !styless.height) {
            console.warn("Injecting dynamic width and height");
            console.log("Before: ", styless);
            styless = {...styless, width: dynamicWidth, height: dynamicHeight};
            console.log("After: ", styless);
        }
    }

    return (
        <View>
            {type === "image" && <Image source={{ uri: localPath }} style={styless} resizeMode={"contain"} />}
            {type === "video" && (
                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: localPath }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    video: {
        width: 350,
        height: 275,
    },
});
