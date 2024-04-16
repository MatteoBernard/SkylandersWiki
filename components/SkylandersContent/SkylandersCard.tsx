import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";
import Text from "../../styles/Theme/StyledText";
import colors from "../../styles/Colors";

type SkylandersCardProps = {
    name: string;
    image: string;
    onPress: () => void;
}

function SkylandersCard(props: SkylandersCardProps) {
    return (
        <TouchableOpacity style={styles.skylander} onPress={props.onPress}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <Image source={{ uri: props.image }} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    skylander: {
        width: '30%',
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: colors.borders,
        margin: 5,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        marginTop: 10,
        borderRadius: 5,
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

export default SkylandersCard;