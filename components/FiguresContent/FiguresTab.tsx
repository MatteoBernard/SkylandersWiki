import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {getFigures} from "../../services/Api/SkylandersApi";
import FiguresCard from "./FiguresCard";
import indexStyles from "../../styles/IndexStyle";
import Text from "../../styles/Theme/StyledText";

type FiguresTabProps = {
    navigation: any;
};

type Figure = {
    name: string;
    image: string;
}

function FiguresTab ({ navigation }: FiguresTabProps)  {
    const [figures, setFigures] = useState<Figure[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFigures();
    }, []);

    const fetchFigures = async () => {
        try {
            const { data } = await getFigures();
            if (data && data.length > 0) {
                setFigures(data);
            } else {
                console.log("No figures found");
            }
        } catch (error) {
            console.error("Error fetching Figures data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={styles.container}>
                <Text style={indexStyles.title}>Figures</Text>
                {figures.length > 0 ? (
                    <View style={styles.figuresContainer}>
                        {figures.map((figure, index) => (
                            figure && figure.name && figure.image && (
                                <FiguresCard
                                    key={index}
                                    name={figure.name}
                                    image={figure.image}
                                    onPress={() => navigation.navigate('ShowFigures', { figure: figure })}
                                />
                            )
                        ))}
                    </View>
                ) : (
                    <Text>No figures found</Text>
                )}
            </View>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    figuresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default FiguresTab;
