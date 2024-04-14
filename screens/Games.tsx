import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RootStackParamList} from "../routes/AppStack";
import Template from "./Template/Template";
import GamesTab from "../components/GamesContent/GamesTab";

type GamesProps = NativeStackScreenProps<RootStackParamList, 'Games'>;

function Games ({ navigation }: GamesProps) {
    return (
        <Template child={<GamesTab navigation={navigation} />} />
    );
}

export default Games;