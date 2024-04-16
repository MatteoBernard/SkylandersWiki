import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";
import Text from "../../styles/Theme/StyledText";
import colors from "../../styles/Colors";

type FiguresCardProps = {
    name: string;
    image: string;
    onPress: () => void;
}

function FiguresCard(props: FiguresCardProps) {
    return (
        <TouchableOpacity style={styles.figure} onPress={props.onPress}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <Image source={{ uri: props.image }} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    figure: {
        width: '30%',
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: colors.borders,
        margin: 5,
    },
    image: {
        width: "60%",
        aspectRatio: 1,
        margin: 10,
        borderRadius: 5,
        alignSelf: "center"
    },
    titleContainer: {
        height: 35,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
    }
});

export default FiguresCard;