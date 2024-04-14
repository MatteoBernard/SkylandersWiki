import {NavigationContainer} from "@react-navigation/native";
import { ThemeProvider } from 'styled-components/native';
import AppStackNavigation from "./routes/AppStackNavigation";
import { theme } from './styles/Theme/Theme';
import {useFonts} from "expo-font";

const App = () => {
    const [fontsLoaded] = useFonts({
        'Outfit-Regular': require('./assets/fonts/Outfit/static/Outfit-Regular.ttf'),
        'Outfit-Thin': require('./assets/fonts/Outfit/static/Outfit-Thin.ttf'),
    });

    return (
      <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppStackNavigation />
          </NavigationContainer>
      </ThemeProvider>
    );
};

export default App;