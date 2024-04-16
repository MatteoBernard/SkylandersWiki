import {ActivityIndicator, StyleSheet, View} from "react-native";
import Text from "../../styles/Theme/StyledText";
import indexStyles from "../../styles/ViewStyles/IndexStyle";
import {useEffect, useState} from "react";
import {
    getElementByName,
    getFiguresByName,
    getGamesByName,
    getSkylandersByName
} from "../../services/Api/SkylandersApi";
import HomeCard from "./HomeCard";

type HomeTabProps = {
    navigation: any;
};

type Item = {
    image: string;
}

function HomeTab ({ navigation }: HomeTabProps)  {
    const [isLoading, setIsLoading] = useState(true);
    const [data1, setData1] = useState<Item>({ image: '' });
    const [data2, setData2] = useState<Item>({ image: '' });
    const [data3, setData3] = useState<Item>({ image: '' });
    const [data4, setData4] = useState<Item>({ image: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const skylander = await getSkylandersByName("Spyro");
            setData1(Object.values(skylander)[0]);

            const element = await getElementByName("Light");
            setData2(Object.values(element)[0]);

            const game = await getGamesByName("Skylanders: Giants");
            setData3(Object.values(game)[0]);

            const figure = await getFiguresByName("Eruptor");
            setData4(Object.values(figure)[0][0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
        <View style={styles.container}>
            <Text style={indexStyles.title}>Home</Text>
            <View style={styles.homeContainer}>
                {data1 && <HomeCard name={"Skylanders"} image={data1.image} onPress={() => navigation.navigate('Skylanders')} />}
                {data2 && <HomeCard name={"Elements"} image={data2.image} onPress={() => navigation.navigate('Elements')} />}
                {data3 && <HomeCard name={"Games"} image={data3.image} onPress={() => navigation.navigate('Games')} />}
                {data4 && <HomeCard name={"Figures"} image={data4.image} onPress={() => navigation.navigate('Figures')} />}
            </View>
        </View>
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
    homeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default HomeTab;