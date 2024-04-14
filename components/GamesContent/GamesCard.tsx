import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Text from "../../styles/Theme/StyledText";

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
        backgroundColor: "#9cbee1",
        padding: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#ccc',
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
