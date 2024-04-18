import React, { useEffect, useState } from "react";
import {ActivityIndicator, StyleSheet, TextInput, View} from "react-native";
import {getFigures} from "../../services/Api/SkylandersApi";
import FiguresCard from "./FiguresCard";
import indexStyles from "../../styles/ViewStyles/IndexStyle";
import Text from "../../styles/Theme/StyledText";
import {Picker} from "@react-native-picker/picker";

type FiguresTabProps = {
    navigation: any;
};

type Figure = {
    name: string;
    image: string;
    game: string;
    isVariant: boolean;
    type: string;
}

function FiguresTab ({ navigation }: FiguresTabProps)  {
    const [figures, setFigures] = useState<Figure[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [filteredFigures, setFilteredFigures] = useState<Figure[]>([]);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string | null>("");

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    useEffect(() => {
        fetchFigures();
    }, []);

    useEffect(() => {
        filterFigures();
    }, [figures, selectedType, selectedVariant, selectedGame, searchText, selectedFilter]);

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

    const filterFigures = () => {
        let filtered = figures.filter(figure => {
            if (selectedGame && figure.game !== selectedGame) {
                return false;
            }
            if (selectedVariant && selectedVariant === "Non variant figures" && figure.isVariant) {
                return false;
            }
            if (selectedVariant && selectedVariant === "Variant figures" && !figure.isVariant) {
                return false;
            }
            if (searchText && !figure.name.toLowerCase().includes(searchText.toLowerCase())) {
                return false;
            }
            if (selectedType && figure.type !== selectedType) {
                return false;
            }
            return true;
        });
        setFilteredFigures(filtered);
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={indexStyles.container}>
                <Text style={indexStyles.title}>Figures</Text>
                <View style={indexStyles.filtersContainer}>
                    <Picker
                        selectedValue={selectedFilter}
                        style={indexStyles.filterPicker}
                        onValueChange={(itemValue) => {
                            setSelectedFilter(itemValue);
                            setSelectedGame(null);
                            setSelectedVariant(null);
                            setSearchText(null);
                            setSelectedType(null);
                        }}
                    >
                        <Picker.Item label="All Figures" value={null} />
                        <Picker.Item label="Filter by game" value="Filter by game" />
                        <Picker.Item label="Filter by variancy" value="Filter by variancy" />
                        <Picker.Item label="Filter by name" value="Filter by name" />
                        <Picker.Item label="Filter by type" value="Filter by type" />
                    </Picker>
                    {
                        selectedFilter === "Filter by game" && (
                            <Picker
                                selectedValue={selectedGame}
                                style={indexStyles.filterPicker}
                                onValueChange={(itemValue) => {
                                    setSelectedGame(itemValue);
                                    setSelectedVariant(null);
                                    setSearchText(null);
                                    setSelectedType(null);
                                }}
                            >
                                <Picker.Item label="All Games" value={null} />
                                <Picker.Item label="Skylanders: Spyro's Adventure" value="Skylanders: Spyro's Adventure" />
                                <Picker.Item label="Skylanders: Giants" value="Skylanders: Giants" />
                                <Picker.Item label="Skylanders: Swap Force" value="Skylanders: Swap Force" />
                                <Picker.Item label="Skylanders: Trap Team" value="Skylanders: Trap Team" />
                                <Picker.Item label="Skylanders: SuperChargers" value="Skylanders: SuperChargers" />
                                <Picker.Item label="Skylanders: Imaginators" value="Skylanders: Imaginators" />
                            </Picker>
                        )
                    }
                    {
                        selectedFilter === "Filter by name" && (
                            <View>
                                <TextInput
                                    style={indexStyles.textInput}
                                    onChangeText={(text) => setSearchText(text)}
                                    placeholder="Search Figures..."
                                />
                            </View>
                        )
                    }
                    {
                        selectedFilter === "Filter by variancy" && (
                            <Picker
                                selectedValue={selectedVariant}
                                style={indexStyles.filterPicker}
                                onValueChange={(itemValue) => {
                                    setSelectedVariant(itemValue);
                                    setSearchText(null);
                                    setSelectedGame(null);
                                    setSelectedType(null);
                                }}
                            >
                                <Picker.Item label="Non variant figures" value="Non variant figures" />
                                <Picker.Item label="Variant figures" value="Variant figures" />
                            </Picker>
                        )
                    }
                    {
                        selectedFilter === "Filter by type" && (
                            <Picker
                                selectedValue={selectedType}
                                style={indexStyles.filterPicker}
                                onValueChange={(itemValue) => {
                                    setSelectedType(itemValue);
                                    setSearchText(null);
                                    setSelectedGame(null);
                                    setSelectedVariant(null);
                                }}
                            >
                                <Picker.Item label="All Types" value={null} />
                                <Picker.Item label="Skylanders" value="skylanders" />
                                <Picker.Item label="Items" value="items" />
                                <Picker.Item label="Crystals" value="crystals" />
                                <Picker.Item label="Vehicles" value="vehicles" />
                            </Picker>
                        )
                    }

                </View>
                {filteredFigures.length > 0 ? (
                    <View style={indexStyles.subContainer}>
                        {filteredFigures.map((figure, index) => (
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

export default FiguresTab;
