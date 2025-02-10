import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View, Button, Image } from "react-native";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import ParallaxScrollView from "../../components/ParallaxScrollView";
import { IconSymbol } from "../../components/ui/IconSymbol";
import MediaDownloader from "../../components/MediaDownloader";

export default function LockerScreen() {
    const mainIndexContents = ["https://odata.files.vitekform.cz/web_assets/non_essential/app/sc_rh.png", "https://odata.files.vitekform.cz/web_assets/non_essential/app/mc_rh.png", "https://s1cdn.ganamaga.me/jkd.jpg"];

    const secondaryCollections = [["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/astra_solo_btn.png",
        "https://odata.files.vitekform.cz/web_assets/non_essential/scrav/clove_btn.png",
        "https://odata.files.vitekform.cz/web_assets/non_essential/scrav/killjoy_oktoberfest_btn.png"],
        [
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_kiss1.jpg",
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_kiss2.jpg",
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_hjbj_cum.jpg",
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_str0.jpg",
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alex_horse_cock.jpg",
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alchairsc_cum.jpg",
            "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/blsc2_1.jpg",
            "hcraft/blz_hand1_1.jpg",
            "hcraft/blz_rc_cum.jpg",
            "hcraft/blz_suck_cum.jpg",
            "hcraft/crp_anal4.jpg",
            "hcraft/crmen.png",
            "hcraft/croutside.jpg",
            "hcraft/crinside.jpg",
            "hcraft/crp_mis_cum.jpg",
            "hcraft/cow_morning_boner.jpg",
            "hcraft/cwass.jpg",
            "hcraft/cw_beach_play.jpg",
            "hcraft/cwnght.jpg",
            "hcraft/cwsc_cum.jpg",
            "hcraft/fortress1_up.png",
            "hcraft/gold.png",
            "hcraft/hrb_blow_cum.jpg",
            "hcraft/hrb_boobjob_cum.jpg",
            "hcraft/hrbr_forest1.jpg",
            "hcraft/jenny.png",
            "hcraft/pgl_alt_ride_cum.jpg",
            "hcraft/pgl_mis_cum.jpg",
            "hcraft/pgl_q_ride_cum.jpg",
            "hcraft/slm_bj0_2.png",
            "hcraft/slf_mlk0.png",
            "hcraft/twilight1.png",
            "hcraft/zmb_blow_cum.jpg",
            "hcraft/zmb_dmsc1.png"

        ],
        ["https://s1cdn.ganamaga.me/jku.jpg"]
    ];


    const thirdCollections = [[["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/astra_solo.png"],
        ["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/clovefade.png"],
        ["https://odata.files.vitekform.cz/web_assets/non_essential/scrav/sagefoursome1.png", "https://odata.files.vitekform.cz/web_assets/non_essential/scrav/sagefoursome2.png", "https://odata.files.vitekform.cz/web_assets/non_essential/scrav/sagefoursome3.png"]]
        , [
            ["https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_tr_sc2_slow.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_tr_sc2_fast.webm"],
            ["hcraft/al_tr_sc3.jpg", "hcraft/al_tr_sc3_dick.jpg", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_tr_sc3_1.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_tr_sc3_2.webm", "hcraft/al_tr_sc3_cum.jpg"],
            ["https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_hjbj1.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_hjbj2.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_hjbj3.webm"],
            ["https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_str1.webm", "hcraft/al_str1_cum.jpg", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/al_str2.webm", "hcraft/al_str2_cum.jpg"],
            ["https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alhrsfuck_stand.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alhrsfuck_slow.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alhrsfuck_fast.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alhrsfuck2.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alhrsfuck_cum.jpg"],
            ["https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alchairsc.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/alchairsc_cum.jpg"],
            ["https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/blz_butt_stand.webm", "hcraft/blz_butt_cum1.jpg", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/blz_butt_slow.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/blz_butt_fast.webm", "https://odata.files.vitekform.cz/web_assets/non_essential/hcraft/blz_butt_cum2.jpg"],
            ["hcraft/blz_hand1_1.jpg", "hcraft/blz_hand1_2.jpg", "hcraft/blz_hand2.webm", "hcraft/blz_hand3.webm", "hcraft/blz_hand_cum.jpg"],
            ["hcraft/blz_rc1.webm", "hcraft/blz_rc2.webm", "hcraft/blz_rc_cum.jpg"],
            ["hcraft/blz_suck1.webm", "hcraft/blz_suck3.webm", "hcraft/blz_suck3.webm", "hcraft/blz_suck_cum.jpg"],
            ["hcraft/crp_anal1.webm", "hcraft/crp_anal2.webm", "hcraft/crp_anal3.webm", "hcraft/crp_anal4.jpg"],
            ["hcraft/crp_blow1.webm", "hcraft/crp_blow2.webm", "hcraft/crinside.jpg", "hcraft/croutside.jpg"],
            ["hcraft/crp_boobjob.webm", "hcraft/crp_boobjob_cum.webm"],
            ["hcraft/crp_cowgirl_stand.webm", "hcraft/crp_cowgirl_sex.webm", "hcraft/crp_cowgirl_cum.webm", "hcraft/crp_cowgirl2.webm"],
            ["hcraft/crp_mis_slow.webm", "hcraft/crp_mis_fast.webm", "hcraft/crp_mis_cum.jpg"],
                ["hcraft/cow_bj_stand.webm", "hcraft/cow_bj_blow.webm", "hcraft/cow_bj_end.webm"],
            ["hcraft/cw_beach_play.jpg", "hcraft/cw_beachfuck.webm", "hcraft/cw_beach_fuck_cum.jpg"],
            ["hcraft/cw_day_stand.webm", "hcraft/cw_day_slow.webm", "hcraft/cw_day_fast.webm"],
            ["hcraft/cw_night_stand.webm", "hcraft/cw_night_slow.webm", "hcraft/cw_night_fast.webm"],
            ["hcraft/cwsc_slow.webm", "hcraft/cwsc_fast.webm", "hcraft/cwsc_cum.jpg"],
            ["hcraft/gangbang1.webm", "hcraft/gangbang2.webm", "hcraft/gangbang3.webm", "hcraft/gangbang4.webm", "hcraft/gangbang5.webm"],
            ["hcraft/ghslow.webm", "hcraft/ghnorm.webm", "hcraft/ghfast.webm"],
            ["hcraft/hrb_blow_stand.webm", "hcraft/hrb_blow_slow.webm", "hcraft/hrb_blow_fast.webm"],
            ["hcraft/hrb_boobjob_slow.webm", "hcraft/hrb_boobjob_fast.webm"],
            ["hcraft/hrb_milk1.webm", "hcraft/hrb_milk2.webm", "hcraft/hrb_milk3.webm"],
            ["hcraft/jen_jerk1.webm", "hcraft/jen_jerk2.webm", "hcraft/jen_bj1.webm", "hcraft/jen_bj2.webm", "hcraft/jen_bj_cum.jpg"],
            ["hcraft/pgl_alt_ride_slow.webm", "hcraft/pgl_alt_ride_fast.webm", "hcraft/pgl_alt_ride_cum.jpg"],
            ["hcraft/pgl_mis_stand.webm", "hcraft/pgl_mis_slow.webm", "hcraft/pgl_mis_fast.webm", "hcraft/pgl_mis_cum.jpg"],
            ["pgl_q_ride_slow.webm", "pgl_q_ride_fast.webm", "pgl_q_ride_cum.jpg"],
            ["hcraft/slm_bj_slow.webm", "hcraft/slm_bj_fast.webm"],
            ["hcraft/slvf_bbj1.webm", "hcraft/slvf_bbj2.webm", "hcraft/slvf_mass.webm"],
            ["hcraft/tw_sc1_1.webm", "hcraft/tw_sc2_1.webm", "hcraft/tw_sc2_2.webm", "hcraft/tw_sc2_cum.jpg"],
            ["hcraft/zmb_blow1.webm", "hcraft/zmb_blow2.webm"],
            ["hcraft/zom_ride1.webm", "hcraft/zom_ride2.webm", "hcraft/zom_ride3.webm"]],
    [["https://s1cdn.ganamaga.me/jkd.jpg", "https://s1cdn.ganamaga.me/jku.jpg", "https://s1cdn.ganamaga.me/JKR34.mp4"]]];

    const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
    const [fixedWidth, setFixedWidth] = useState(screenWidth);
    const [fixedHeight, setFixedHeight] = useState(screenHeight);
    const [originalImageWidth, setOriginalImageWidth] = useState(0);
    const [originalImageHeight, setOriginalImageHeight] = useState(0);

    function updateImageDimensions(imageURI, callback) {
        imageURI = imageURI.replace("https://odata.files.vitekform.cz/web_assets/non_essential/", "");
        imageURI = "https://odata.files.vitekform.cz/web_assets/non_essential/" + imageURI;
        if (imageURI.endsWith(".mp4") || imageURI.endsWith(".webm")) {
            setOriginalImageHeight(200);
            setOriginalImageWidth(200);

            callback(200, 200);
            return;
        }
        Image.getSize(imageURI, (width, height) => {
            setOriginalImageWidth(width);
            setOriginalImageHeight(height);

            const aspectRatio = width / height;
            const maxWidth = screenWidth * 0.9; // Set maximum width to 90% of screen width
            const maxHeight = screenHeight * 0.9; // Set maximum height to 90% of screen height

            let newWidth = width;
            let newHeight = height;

            while (newWidth > maxWidth) {
                newWidth = maxWidth;
                newHeight = maxWidth / aspectRatio;
            }

            while (newHeight > maxHeight) {
                newHeight = maxHeight;
                newWidth = maxHeight * aspectRatio;
            }

            callback(newWidth, newHeight);
        });
    }

    function setCollection(findex) {
        setCurrentPage("index_primary");

        const content = (
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {secondaryCollections[findex].map((content, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSecondaryCollection(findex, index, 0)}
                        style={{ width: "30%", aspectRatio: 1, marginBottom: 10 }} // 3 items per row
                    >
                        <MediaDownloader src={content} styless={styles.showcase_rounded} />
                    </TouchableOpacity>
                ))}
            </View>
        );

        setConditionalContent(
            <View>
                {content}
                <Button title={"Back"} onPress={() => updatePage("index_main")} />
            </View>
        );
    }

    function setSecondaryCollection(findex, sindex, tindex) {
        setCurrentPage("index_secondary");
        const imageURI = thirdCollections[findex][sindex][tindex];

        updateImageDimensions(imageURI, (width, height) => {
            setFixedWidth(width);
            setFixedHeight(height);
        });

        if (imageURI.endsWith(".mp4") || imageURI.endsWith(".webm") || imageURI.endsWith(".jpg") || imageURI.endsWith(".png")) {
            let fasterCond = tindex < thirdCollections[findex][sindex].length - 1;
            let slowerCond = tindex > 0;
            setConditionalContent(
                <View>
                    <View style={{ marginTop: 20}}>
                        <MediaDownloader src={imageURI} styless={{ width: fixedWidth, height: fixedHeight ,marginTop: 20 }} />
                    </View>
                    <View style={{ marginTop: 20}}>
                        <Button disabled={!slowerCond} title={"Slower"} onPress={() => {if (tindex > 0) {
                            setSecondaryCollection(findex, sindex, tindex - 1);
                        }}} />
                        <Button disabled={!fasterCond} title={"Faster"} onPress={() => {if (tindex < thirdCollections[findex][sindex].length - 1) {
                            setSecondaryCollection(findex, sindex, tindex + 1);
                        }}} />
                        <Button title={"Back"} onPress={() => setCollection(findex)} />
                    </View>
                </View>
            );
        }

    }

    const [conditionalContent, setConditionalContent] = useState();
    const [currentPage, setCurrentPage] = useState("welcome");
    const [inputValue, setInputValue] = useState("");

    function updatePage(page) {
        setCurrentPage(page);
    }

    function submitPass() {
        if (inputValue === "2852") {
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
                console.log(mainIndexContents);
                setConditionalContent(
                    <ThemedView style={styles.contentContainer}>
                        <ThemedText type="title">Locker</ThemedText>
                        {mainIndexContents.map((content, index) => (
                            <TouchableOpacity key={index} onPress={() => setCollection(index)}>
                                <MediaDownloader src={content} styless={styles.media} />
                            </TouchableOpacity>
                        ))}
                        <View style={{marginTop: 20}}>
                            <Button title={"Lock the Locker"} onPress={() => updatePage("welcome")} />
                        </View>
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
        marginTop: 20,
        width: 50,
        height: 50,
    },
    showcase_rounded: {
        borderRadius: 20,
        width: 100,
        height: 100,
    }
});