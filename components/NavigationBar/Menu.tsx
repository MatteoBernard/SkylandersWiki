import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import colors from "../../styles/Colors";

type MenuProps = {
    isSidebarOpen: boolean;
    onPress: () => void;
}

function Menu(props: MenuProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                {props.isSidebarOpen ? (
                    <Ionicons name="close-outline" size={30} onPress={props.onPress} style={styles.icon} />
                ) : (
                    <Ionicons name="menu-outline" size={30} onPress={props.onPress} style={styles.icon} />
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.tertiary,
    },
    icon: {
        color: "white"
    }
});

export default Menu;