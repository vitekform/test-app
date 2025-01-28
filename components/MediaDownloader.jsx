import { useState, useEffect } from "react";
import { Image, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { Video } from "expo-av";

export default function MediaDownloader({ src, type, style }) {
    const [localPath, setLocalPath] = useState(null);

    useEffect(() => {
        async function downloadMedia() {
            const fileName = src.split('/').pop();
            const localFilePath = `${FileSystem.documentDirectory}${fileName}`;

            try {
                const downloadResult = await FileSystem.downloadAsync(src, localFilePath);

                if (downloadResult.status === 200) {
                    setLocalPath(localFilePath);
                } else {
                    console.error("Failed to download media");
                }
            } catch (error) {
                console.error("Error downloading media:", error);
            }
        }

        downloadMedia();
    }, [src]);

    if (!localPath) {
        return null;
    }

    if (type === "image") {
        return <Image source={{ uri: localPath }} style={style} />;
    } else if (type === "video") {
        return (
            <View style={style}>
                <Video
                    source={{ uri: localPath }}
                    style={style}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                />
            </View>
        );
    } else if (type === "audio") {
        return (
            <View style={style}>
                <Audio source={{ uri: localPath }} style={style} />
            </View>
        );
    } else {
        return null;
    }
}