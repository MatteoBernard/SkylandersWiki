import React, { useEffect, useRef, useState } from 'react';
import {StyleSheet, Animated, ScrollView, Platform, StatusBar, View, Linking} from 'react-native';
import SideButton from "./SideButton";
import {RootStackParamList} from "../../routes/AppStack";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

type SideBarProps = {
    isOpen: boolean;
    onClose: () => void;
};

function SideBar(props: SideBarProps) {
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        setIsAnimationFinished(false)
        Animated.timing(animationValue, {
            toValue: props.isOpen ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start(() => setIsAnimationFinished(true));
    }, [props.isOpen]);

    const handleClose = () => {
        const currentRouteName = navigation.getState().routeNames[navigation.getState().index];
        if (navigation.canGoBack() && currentRouteName !== 'Home') {
            navigation.pop();
        }
        props.onClose();
    };

    const openLink = async (url: string) => {
        await Linking.openURL(url);
    }

    return (
        <Animated.View style={[styles.sidebarContainer, {
            width: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
            }),
            borderRightColor: props.isOpen ? "#42618f" : "transparent",
            borderRightWidth: props.isOpen ? 2 : 0,
        }]}>
            {isAnimationFinished && (
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <SideButton message={"Home"} onPress={() => { handleClose(); }} />
                    <SideButton message={"Skylanders"} onPress={() => { handleClose(); navigation.navigate('Skylanders'); }} />
                    <SideButton message={"Elements"} onPress={() => { handleClose(); navigation.navigate('Elements'); }} />
                    <SideButton message={"Games"} onPress={() => { handleClose(); navigation.navigate('Games'); }} />
                    <SideButton message={"Figures"} onPress={() => { handleClose(); navigation.navigate('Figures'); }} />

                    <View style={styles.separator} />

                    <SideButton message={"Github"} onPress={() => { openLink("https://github.com/MatteoBernard/SkylandersWiki") }} />
                    <SideButton message={"Api"} onPress={() => { openLink("https://silly-pink-belt.cyclic.app/") }} />
                </ScrollView>
            )}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    sidebarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 200,
        backgroundColor: '#263055',
        borderRightColor: "#42618f",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 25
    },
    separator: {
        borderColor: 'white',
        borderWidth: 1,
        width: "80%",
        alignSelf: "center",
        margin: 50
    },
});

export default SideBar;
