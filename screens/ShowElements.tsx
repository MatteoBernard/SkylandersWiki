import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RootStackParamList} from "../routes/AppStack";
import {StyleSheet, View} from "react-native";
import {Image} from "expo-image";
import Template from "./Template/Template";
import BackButton from "../components/Commons/BackButton";
import React from "react";
import showStyles from "../styles/ShowStyle";
import Text from "../styles/Theme/StyledText"

type ShowElementsProps = NativeStackScreenProps<RootStackParamList, 'ShowElements'>;

type Element = {
    name: string;
    description: string;
    image: string;
}

function renderElement(element: Element, navigation: any): React.JSX.Element {
    return (
        <View>
            <BackButton onPress={() => {navigation.pop()}} />
            <View style={showStyles.card}>
                <View>
                    <View style={showStyles.header}>
                        <Text style={showStyles.title}>{element.name}</Text>
                    </View>

                    <Image source={{ uri: element.image }} style={showStyles.image} />

                    <Text style={showStyles.title}>Description</Text>
                    <Text style={showStyles.infos}>{element.description}</Text>
                </View>
            </View>
        </View>
    );
}

export function ShowElements({ route, navigation }: ShowElementsProps) {
    const element: Element = route.params.element as Element;

    return (
        <Template child={renderElement(element, navigation)} />
    );
}
