import {StyleSheet, TouchableOpacity, View} from "react-native";
import Text from "../../styles/Theme/StyledText";
import {Image} from "expo-image";
import colors from "../../styles/Colors";

type HomeCardProps = {
    name: string;
    image: string;
    onPress: () => void;
}

function HomeCard(props: HomeCardProps) {
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
        width: '80%',
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#ccc',
        margin: 15,
    },
    image: {
        width: "80%",
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

export default HomeCard;