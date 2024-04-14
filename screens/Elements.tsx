import React from "react";
import {View} from "react-native";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../routes/AppStack";
import Template from "./Template/Template";
import ElementsTab from "../components/ElementsContent/ElementsTab";

type ElementsProps = NativeStackScreenProps<RootStackParamList, 'Elements'>;

const tab = (navigation: any) => (
    <View>
        <ElementsTab navigation={navigation} />
    </View>
);

function Elements({ navigation }: ElementsProps) {
    return (
        <Template child={tab(navigation) } />
    );
}

export default Elements;
