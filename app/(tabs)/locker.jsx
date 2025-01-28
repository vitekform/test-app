import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View, Button, Image } from "react-native";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import ParallaxScrollView from "../../components/ParallaxScrollView";
import { IconSymbol } from "../../components/ui/IconSymbol";
import MediaDownloader from "../../components/MediaDownloader";

export default function LockerScreen() {
    const mainIndexContents = ["https://odata.files.vitekform.cz/web_assets/non_essential/app/sc_rh.png", "https://odata.files.vitekform.cz/web_assets/non_essential/app/mc_rh.png"];
    const secondaryCollections = [["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/astra_solo_btn.png", "https://odata.files.vitekform.cz/web_assets/non_essential/scrav/clove_btn.png"]];
    const thirdCollections = [[["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/astra_solo.png"], ["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/clovefade.png"]]];

    const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
    const [fixedWidth, setFixedWidth] = useState(screenWidth);
    const [fixedHeight, setFixedHeight] = useState(screenHeight);
    const [originalImageWidth, setOriginalImageWidth] = useState(0);
    const [originalImageHeight, setOriginalImageHeight] = useState(0);

    function updateImageDimensions(imageURI, callback) {
        Image.getSize(imageURI, (width, height) => {
            setOriginalImageWidth(width);
            setOriginalImageHeight(height);
            callback(width, height);
        });
    }

    function setCollection(findex) {
        setConditionalContent(secondaryCollections[findex].map((content, index) => (
            <TouchableOpacity key={index} onPress={() => setSecondaryCollection(findex, index)}>
                <MediaDownloader src={content} type="image" style={styles.media} />
            </TouchableOpacity>
        )));
    }

    function setSecondaryCollection(findex, sindex) {
        const imageURI = thirdCollections[findex][sindex][0];
        updateImageDimensions(imageURI, (width, height) => {
            let newWidth = width;
            let newHeight = height;
            while (newWidth > screenWidth) {
                newWidth /= 2;
            }
            while (newHeight > screenHeight) {
                newHeight /= 2;
            }
            setFixedWidth(newWidth);
            setFixedHeight(newHeight);
            const dynamicStyle = { width: newWidth, height: newHeight, marginTop: 20, resizeMode: 'contain' };
            setConditionalContent(
                <MediaDownloader src={imageURI} type="image" style={dynamicStyle} />
            );
        });
    }

    const [conditionalContent, setConditionalContent] = useState();
    const [currentPage, setCurrentPage] = useState("welcome");
    const [inputValue, setInputValue] = useState("");

    function updatePage(page) {
        setCurrentPage(page);
    }

    function submitPass() {
        if (inputValue === "SilverLemonade/76") {
            alert("Locker unlocked!");
            updatePage("index_main");
        } else {
            alert("Incorrect code. Please try again.");
            setInputValue("");
        }
    }

    useEffect(() => {
        function updateContent() {
            if (currentPage === "welcome") {
                setConditionalContent(
                    <ThemedView style={styles.contentContainer}>
                        <ThemedText type="title">Locker</ThemedText>
                        <Button title={"Unlock the Locker"} onPress={() => updatePage("unlock_page")} />
                    </ThemedView>
                );
            } else if (currentPage === "unlock_page") {
                setConditionalContent(
                    <ThemedView style={styles.contentContainer}>
                        <ThemedText type="title">Unlock the Locker</ThemedText>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter code"
                            value={inputValue}
                            onChangeText={setInputValue}
                            onSubmitEditing={() => submitPass()}
                        />
                        <Button title={"Back"} onPress={() => updatePage("welcome")} />
                    </ThemedView>
                );
            } else if (currentPage === "index_main") {
                setConditionalContent(
                    <ThemedView style={styles.contentContainer}>
                        <ThemedText type="title">Locker</ThemedText>
                        {mainIndexContents.map((content, index) => (
                            <TouchableOpacity key={index} onPress={() => setCollection(index)}>
                                <MediaDownloader src={content} type="image" style={styles.media} />
                            </TouchableOpacity>
                        ))}
                    </ThemedView>
                );
            }
        }

        updateContent();
    }, [currentPage, inputValue]);

    return (
        <ParallaxScrollView
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        >
            {conditionalContent}
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    lineBreak: {
        height: 10, // Adjust the height as needed
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
    },
    media: {
        width: 50,
        height: 50,
        marginTop: 20,
    },
});