import {StyleSheet} from "react-native";
import colors from "../Colors";

const indexStyles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 20,
    },
    filtersContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.borders,
        backgroundColor: colors.secondary,
        borderRadius: 5,
        width: "96%"
    },
    filterPicker: {
        height: 50,
        flex: 0,
        alignSelf: 'stretch',
        marginVertical: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    subContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    textInput: {
        width: '80%',
        marginBottom: 15,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Outfit-Regular'
    }
});

export default indexStyles;