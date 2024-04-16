import {StyleSheet, Text, View} from "react-native";
import Template from "./Template/Template";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RootStackParamList} from "../routes/AppStack";
import {Image} from "expo-image";
import BackButton from "../components/Commons/BackButton";
import React from "react";
import showStyles from "../styles/ViewStyles/ShowStyle";

type ShowFiguresProps = NativeStackScreenProps<RootStackParamList, 'ShowFigures'>;

type Figure = {
    name: string,
    game: string,
    type: string,
    isVariant: boolean
    image: string
}

function renderFigure(figure : Figure, navigation: any): React.JSX.Element {
    return (
        <View>
            <BackButton onPress={() => {navigation.pop()}} />
            <View style={showStyles.card}>
                <View>
                    <View style={showStyles.header}>
                        <Text style={showStyles.title}>{figure.name}</Text>
                    </View>

                    <Image source={{ uri: figure.image }} style={showStyles.image} />

                    <Text style={showStyles.title}>Informations</Text>
                    <View style={showStyles.infos}>
                        <Text>Game : {figure.game}</Text>
                        <Text>Type : {figure.type}</Text>
                        <Text>Variant : {figure.isVariant ? 'Yes' : 'No'}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export function ShowFigures({ route, navigation }: ShowFiguresProps) {
    const figure: Figure = route.params.figure as Figure;
    return (
        <Template child={renderFigure(figure, navigation)} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
});

export default ShowFigures;