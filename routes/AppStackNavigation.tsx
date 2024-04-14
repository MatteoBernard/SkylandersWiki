import {AppStack} from "./AppStack";
import Home from "../screens/Home";
import Skylanders from "../screens/Skylanders";
import ShowSkylanders from "../screens/ShowSkylanders";
import Elements from "../screens/Elements";
import {ShowElements} from "../screens/ShowElements";
import Games from "../screens/Games";
import Figures from "../screens/Figures";
import ShowFigures from "../screens/ShowFigures";

function AppStackNavigation() {
    return (
        <AppStack.Navigator initialRouteName={"Home"}>
            <AppStack.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
            <AppStack.Screen name={"Skylanders"} component={Skylanders} options={{ headerShown: false }} />
            <AppStack.Screen name={"ShowSkylanders"} component={ShowSkylanders} options={{ headerShown: false }} />
            <AppStack.Screen name={"Elements"} component={Elements} options={{ headerShown: false }} />
            <AppStack.Screen name={"ShowElements"} component={ShowElements} options={{ headerShown: false }} />
            <AppStack.Screen name={"Games"} component={Games} options={{ headerShown: false }} />
            <AppStack.Screen name={"Figures"} component={Figures} options={{ headerShown: false }} />
            <AppStack.Screen name={"ShowFigures"} component={ShowFigures} options={{ headerShown: false }} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigation