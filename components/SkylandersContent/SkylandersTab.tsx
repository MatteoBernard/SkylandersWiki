import React, { useEffect, useState } from "react";
import {ActivityIndicator, TextInput, View} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getSkylanders } from "../../services/Api/SkylandersApi";
import SkylandersCard from "./SkylandersCard";
import Text from "../../styles/Theme/StyledText";
import indexStyles from "../../styles/ViewStyles/IndexStyle";

type SkylandersTabProps = {
    navigation: any;
};

type Skylander = {
    name: string;
    image: string;
    release: string;
    element: string;
    role: string;
}

function SkylandersTab({ navigation }: SkylandersTabProps) {
    const [skylanders, setSkylanders] = useState<Skylander[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [filteredSkylanders, setFilteredSkylanders] = useState<Skylander[]>([]);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const [selectedElement, setSelectedElement] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string | null>("");

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    useEffect(() => {
        fetchSkylanders();
    }, []);

    useEffect(() => {
        filterSkylanders();
    }, [skylanders, selectedRole, selectedGame, selectedElement, searchText, selectedFilter]);

    const fetchSkylanders = async () => {
        try {
            const { data } = await getSkylanders();
            if (data && data.length > 0) {
                setSkylanders(data);
            } else {
                console.log("No skylanders found");
            }
        } catch (error) {
            console.error("Error fetching Skylanders data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filterSkylanders = () => {
        let filtered = skylanders.filter(skylander => {
            if (selectedGame && skylander.release !== selectedGame) {
                return false;
            }
            if (selectedRole && ! skylander.role.includes(selectedRole)) {
                return false;
            }
            if (selectedElement && skylander.element !== selectedElement) {
                return false;
            }
            if (searchText && !skylander.name.toLowerCase().includes(searchText.toLowerCase())) {
                return false;
            }
            return true;
        });
        setFilteredSkylanders(filtered);
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={indexStyles.container}>
                <Text style={indexStyles.title}>Skylanders</Text>
                <View style={indexStyles.filtersContainer}>
                    <Picker
                        selectedValue={selectedFilter}
                        style={indexStyles.filterPicker}
                        onValueChange={(itemValue) => {
                            setSelectedFilter(itemValue);
                            setSelectedGame(null);
                            setSelectedElement(null);
                            setSearchText(null);
                            setSelectedRole(null);
                        }}
                    >
                        <Picker.Item label="All Skylanders" value={null} />
                        <Picker.Item label="Filter by game" value="Filter by game" />
                        <Picker.Item label="Filter by element" value="Filter by element" />
                        <Picker.Item label="Filter by name" value="Filter by name" />
                        <Picker.Item label="Filter by role" value="Filter by role" />
                    </Picker>
                    {
                        selectedFilter === "Filter by game" && (
                            <Picker
                                selectedValue={selectedGame}
                                style={indexStyles.filterPicker}
                                onValueChange={(itemValue) => {
                                    setSelectedGame(itemValue);
                                    setSelectedElement(null);
                                    setSelectedRole(null);
                                    setSearchText(null);
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
                        selectedFilter === "Filter by element" && (
                            <Picker
                                selectedValue={selectedElement}
                                style={indexStyles.filterPicker}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedElement(itemValue);
                                    setSearchText(null);
                                    setSelectedRole(null);
                                    setSelectedGame(null);
                                }}
                            >
                                <Picker.Item label="All Elements" value={null} />
                                <Picker.Item label="Air" value="Air" />
                                <Picker.Item label="Dark" value="Dark" />
                                <Picker.Item label="Earth" value="Earth" />
                                <Picker.Item label="Fire" value="Fire" />
                                <Picker.Item label="Life" value="Life" />
                                <Picker.Item label="Light" value="Light" />
                                <Picker.Item label="Magic" value="Magic" />
                                <Picker.Item label="Tech" value="Tech" />
                                <Picker.Item label="Undead" value="Undead" />
                                <Picker.Item label="Water" value="Water" />
                                <Picker.Item label="Kaos" value="Kaos" />
                            </Picker>
                        )
                    }
                    {
                        selectedFilter === "Filter by name" && (
                            <View>
                                <TextInput
                                    onChangeText={(text) => setSearchText(text)}
                                    placeholder="Search Skylanders..."
                                />
                            </View>
                        )
                    }
                    {
                        selectedFilter === "Filter by role" && (
                            <Picker
                                selectedValue={selectedRole}
                                style={indexStyles.filterPicker}
                                onValueChange={(itemValue) => {
                                    setSelectedRole(itemValue);
                                    setSearchText(null);
                                    setSelectedElement(null);
                                    setSelectedGame(null);
                                }}
                            >
                                <Picker.Item label="All Roles" value={null} />
                                <Picker.Item label="Sensei" value="Sensei" />
                                <Picker.Item label="Core Skylander" value="Core Skylander" />
                                <Picker.Item label="SWAP Force" value="SWAP Force" />
                                <Picker.Item label="Mini" value="Mini" />
                                <Picker.Item label="Trap Master" value="Trap Master" />
                                <Picker.Item label="SuperCharger" value="SuperCharger" />
                                <Picker.Item label="Giant" value="Giant" />
                            </Picker>
                        )
                    }

                </View>
                <View style={indexStyles.subContainer}>
                    {filteredSkylanders.length > 0 ? (
                        filteredSkylanders.map((skylander, index) => (
                            <SkylandersCard
                                key={index}
                                name={skylander.name}
                                image={skylander.image}
                                onPress={() => navigation.navigate('ShowSkylanders', { skylander: skylander })}
                            />
                        ))
                    ) : (
                        <Text>No skylanders found</Text>
                    )}
                </View>
            </View>
        )
    );
}

export default SkylandersTab;
