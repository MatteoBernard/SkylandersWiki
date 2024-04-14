import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RootStackParamList} from "../routes/AppStack";
import {View} from "react-native";
import Template from "./Template/Template";
import HomeTab from "../components/HomeContent/HomeTab";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const tab = (navigation: any) => (
    <View>
        <HomeTab navigation={navigation} />
    </View>
);

function Home({navigation}: HomeProps) {
    return (
        <Template child={tab(navigation)} />
    );
}

export default Home;