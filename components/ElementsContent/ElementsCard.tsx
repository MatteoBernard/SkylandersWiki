import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import Text from "../../styles/Theme/StyledText";
import colors from "../../styles/Colors";

type ElementCardProps = {
    name: string;
    image: string;
    description: string;
    onPress: () => void;
}

function ElementsCard(props: ElementCardProps) {
    return (
        <TouchableOpacity style={styles.element} onPress={props.onPress}>
            <View style={styles.titleContainer}>
                <Text>{props.name}</Text>
            </View>
            <Image source={{ uri: props.image }} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    element: {
        width: '45%',
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: colors.borders,
        margin: 6,
    },
    image: {
        width: "70%",
        alignSelf: "center",
        aspectRatio: 1,
        margin: 10,
        borderRadius: 5,
    },
    titleContainer: {
        height: 35,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default ElementsCard;
