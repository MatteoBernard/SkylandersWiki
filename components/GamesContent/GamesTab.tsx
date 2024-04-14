import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {getGames} from "../../services/Api/SkylandersApi";
import GamesCard from "./GamesCard";
import Text from "../../styles/Theme/StyledText";
import indexStyles from "../../styles/IndexStyle";

type GamesTabProps = {
    navigation: any;
};

type Game = {
    name: string;
    image: string;
    release: string;
};

function GamesTab({ navigation }: GamesTabProps) {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const { data } = await getGames();
            if (data && data.length > 0) {
                setGames(data);
            } else {
                console.log("No games found");
            }
        } catch (error) {
            console.error("Error fetching games data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={styles.container}>
                <Text style={indexStyles.title}>Games</Text>
                {games.map((game, index) => (
                    <View key={index}>
                        <GamesCard
                            key={index}
                            name={game.name}
                            image={game.image}
                            release={game.release}
                        />
                    </View>
                ))}
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
    gamesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default GamesTab;
