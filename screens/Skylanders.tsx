import { View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../routes/AppStack"
import Template from "./Template/Template";
import SkylandersTab from "../components/SkylandersContent/SkylandersTab";

type SkylandersProps = NativeStackScreenProps<RootStackParamList, 'Skylanders'>;

const tab = (navigation: any) => (
    <View>
        <SkylandersTab navigation={navigation} />
    </View>
);

function Skylanders ({ navigation }: SkylandersProps) {
    return (
        <Template child={tab(navigation)} />
    );
}

export default Skylanders;
