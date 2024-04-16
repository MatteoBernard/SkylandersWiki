import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native";
import React, {useState} from "react";
import Menu from "../../components/NavigationBar/Menu";
import SideBar from "../../components/NavigationBar/SideBar";
import colors from "../../styles/Colors";

type TemplateProps = {
    child: React.ReactNode;
}

function Template({ child }: TemplateProps) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Menu onPress={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}></SideBar>
            <ScrollView style={styles.container}>
                {child}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.primary,
        fontFamily: "Outfit-Regular",
    },
    container: {
        backgroundColor: colors.primary
    },
});

export default Template;