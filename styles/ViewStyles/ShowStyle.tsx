import {StyleSheet} from "react-native";

const showStyles = StyleSheet.create({
    image: {
        width: '60%',
        aspectRatio: 1,
        margin: 20,
        borderRadius: 10,
        alignSelf: "center"
    },
    card : {
        alignSelf: "center",
        width: "85%",
        backgroundColor: "#9cbee1",
        borderRadius: 10,
        padding: 5,
        marginBottom: 30,
        minHeight: 600,
    },
    header : {
        padding: 5,
        alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    headerImg: {
        width: 25,
        height: 25,
        margin: 5
    },
    infos : {
        padding: 15,
        marginBottom: 2,
    },
    title: {
        paddingLeft: 10,
        fontSize: 20,
    }
});

export default showStyles;