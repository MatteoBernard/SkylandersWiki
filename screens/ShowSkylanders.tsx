import {ActivityIndicator, StyleSheet, View} from "react-native";
import Template from "./Template/Template";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RootStackParamList} from "../routes/AppStack";
import {Image} from "expo-image";
import BackButton from "../components/Commons/BackButton";
import React, {useEffect, useState} from "react";
import Text from "../styles/Theme/StyledText"
import {getElementByName} from "../services/Api/SkylandersApi";
import showStyles from "../styles/ShowStyle";

type ShowSkylandersProps = NativeStackScreenProps<RootStackParamList, 'ShowSkylanders'>;

type Skylander = {
    id: number,
    name: string,
    gender: string,
    species: string,
    release: string,
    role: string,
    element: string,
    quote: string,
    abilities: {
        abilitie1: string,
        abilitie2: string,
        abilitie3: string,
        abilitie4: string,
        abilitie5: string
    },
    description: string,
    image: string
}

type Element = {
    image: string;
}

function renderSkylander(skylander : Skylander, element: Element, navigation: any): React.JSX.Element {
    return (
        <View>
            <BackButton onPress={() => {navigation.pop()}} />
            <View style={showStyles.card}>
                <View style={showStyles.header}>
                    <Text style={showStyles.title}>{skylander.name}</Text>
                    <Image source={{ uri: element.image }} style={showStyles.headerImg} />
                </View>
                <Text style={styles.quote}>{skylander.quote}</Text>

                <Image source={{ uri: skylander.image }} style={showStyles.image} />

                <Text style={showStyles.title}>Informations</Text>
                <View style={showStyles.infos}>
                    <Text>Gender : {skylander.gender}</Text>
                    <Text>Species : {skylander.species}</Text>
                    <Text>Role : {skylander.role}</Text>
                </View>

                <Text style={showStyles.title}>Abilities</Text>
                <View style={showStyles.infos}>
                    <Text>- {skylander.abilities.abilitie1}</Text>
                    <Text>- {skylander.abilities.abilitie2}</Text>
                    <Text>- {skylander.abilities.abilitie3}</Text>
                    <Text>- {skylander.abilities.abilitie4}</Text>
                    <Text>- {skylander.abilities.abilitie5}</Text>
                </View>

                <Text style={showStyles.title}>Description</Text>
                <Text style={showStyles.infos}>{skylander.description}</Text>
            </View>
        </View>
    );
}

export function ShowSkylanders({ route, navigation }: ShowSkylandersProps) {
    const skylander: Skylander = route.params.skylander as Skylander;

    const [element, setElement] = useState<Element>(null!);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchElement();
    }, []);

    const fetchElement = async () => {
        try {
            let element: string;
            skylander.element === 'Kaos' ? element = 'Dark' : element = skylander.element;
            const { data } = await getElementByName(element);
            if (data) {
                setElement(data);
            } else {
                console.log("No element found");
            }
        } catch (error) {
            console.error("Error fetching elements data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <Template child={renderSkylander(skylander, element, navigation)} />
        )
    );
}

const styles = StyleSheet.create({
    quote: {
        alignSelf: "center",
        fontStyle: "italic"
    },
});

export default ShowSkylanders;