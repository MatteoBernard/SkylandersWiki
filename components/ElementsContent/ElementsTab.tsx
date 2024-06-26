import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {getElements} from "../../services/Api/SkylandersApi";
import ElementsCard from "./ElementsCard";
import indexStyles from "../../styles/ViewStyles/IndexStyle";
import Text from "../../styles/Theme/StyledText";

type ElementsTabProps = {
    navigation: any;
};

type Element = {
    name: string;
    image: string;
    description: string;
};

function ElementsTab({ navigation }: ElementsTabProps) {
    const [elements, setElements] = useState<Element[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchElements();
    }, []);

    const fetchElements = async () => {
        try {
            const { data } = await getElements();
            if (data && data.length > 0) {
                setElements(data);
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
            <View style={indexStyles.container}>
                <Text style={indexStyles.title}>Elements</Text>
                {elements.length > 0 ? (
                    <View style={indexStyles.subContainer}>
                        {elements.map((element, index) => (
                            element && element.name && element.image && (
                                <ElementsCard
                                    key={index}
                                    name={element.name}
                                    image={element.image}
                                    description={element.description}
                                    onPress={() => navigation.navigate('ShowElements', { element: element })}
                                />
                            )
                        ))}
                    </View>
                ) : (
                    <Text>No element found</Text>
                )}
            </View>
        )
    );
}

export default ElementsTab;
