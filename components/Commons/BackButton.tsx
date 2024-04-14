import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

type BackButtonProps = {
    onPress: () => void;
}

function BackButton(props: BackButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        color: "white",
        margin: 10,
    },
});

export default BackButton;