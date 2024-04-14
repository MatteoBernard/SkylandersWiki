import { View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../routes/AppStack"
import Template from "./Template/Template";
import FiguresTab from "../components/FiguresContent/FiguresTab";

type FiguresProps = NativeStackScreenProps<RootStackParamList, 'Figures'>;

const tab = (navigation: any) => (
    <View>
        <FiguresTab navigation={navigation} />
    </View>
);

function Figures ({ navigation }: FiguresProps) {
    return (
        <Template child={tab(navigation)} />
    );
}

export default Figures;
