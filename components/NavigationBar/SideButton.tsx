import {StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import Text from "../../styles/Theme/StyledText";

type SideButtonProps = {
    message: string;
    onPress: () => void;
}

function SideButton(props: SideButtonProps) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.text}>{props.message}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: "#7493b5",
        width: 150,
        borderRadius: 7,
    },
    text: {
        alignSelf: "center"
    }
});

export default SideButton;