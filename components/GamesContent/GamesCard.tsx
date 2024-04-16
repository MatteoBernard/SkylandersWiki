import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Text from "../../styles/Theme/StyledText";
import colors from "../../styles/Colors";

type GamesCardProps = {
    name: string;
    image: string;
    release: string;
}

function GamesCard(props: GamesCardProps) {
    return (
        <View style={styles.game}>
            <Text>{props.name}</Text>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text>{props.release}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    game: {
        width: '100%',
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: colors.borders,
        margin: 10,
        alignItems: "center"
    },
    image: {
        width: "50%",
        alignSelf: "center",
        aspectRatio: 1,
        margin: 10,
        borderRadius: 5,
    },
});

export default GamesCard;
