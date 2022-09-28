import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Homescreens";

// npm install @react-navigation/stack
// npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
// npm install react-native-reanimated
// expo install react-native-svg

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
