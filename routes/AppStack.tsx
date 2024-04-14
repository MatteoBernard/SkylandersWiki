import {createStackNavigator} from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Skylanders: undefined;
    ShowSkylanders: { skylander: object };
    Elements: undefined;
    ShowElements: { element: object };
    Games: undefined;
    Figures: undefined;
    ShowFigures: { figure: object };
}

export const AppStack = createStackNavigator<RootStackParamList>();