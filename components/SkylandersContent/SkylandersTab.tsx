import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {getSkylanders} from "../../services/Api/SkylandersApi";
import SkylandersCard from "./SkylandersCard";
import Text from "../../styles/Theme/StyledText";
import indexStyles from "../../styles/IndexStyle";

type SkylandersTabProps = {
    navigation: any;
};

type Skylander = {
    name: string;
    image: string;
}

function SkylandersTab ({ navigation }: SkylandersTabProps)  {
    const [skylanders, setSkylanders] = useState<Skylander[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSkylanders();
    }, []);

    const fetchSkylanders = async () => {
        try {
            const { data } = await getSkylanders();
            if (data && data.length > 0) {
                setSkylanders(data);
            } else {
                console.log("Aucun skylander trouvé");
            }
        } catch (error) {
            console.error("Error fetching Skylanders data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={styles.container}>
                <Text style={indexStyles.title}>Skylanders</Text>
                {skylanders.length > 0 ? (
                    <View style={styles.skylandersContainer}>
                        {skylanders.map((skylander, index) => (
                            skylander && skylander.name && skylander.image && (
                                <SkylandersCard
                                    key={index}
                                    name={skylander.name}
                                    image={skylander.image}
                                    onPress={() => navigation.navigate('ShowSkylanders', { skylander: skylander })}
                                />
                            )
                        ))}
                    </View>
                ) : (
                    <Text>No skylander found</Text>
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
    skylandersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default SkylandersTab;
