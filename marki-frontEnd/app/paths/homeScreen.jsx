// Inside HomeScreen.js
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    // This function will run after the specified delay
    const timerId = setTimeout(() => {
      navigation.navigate("Main");
      console.log("Done");
      // You can perform any action here, e.g., update state, navigate, etc.
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup function: Clear the timeout if the component unmounts before the delay
    return () => clearTimeout(timerId);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2f4471ff", "#051030ff"]} // Array of colors for the gradient
        style={styles.gradientBox}
        start={{ x: 0, y: 0 }} // Start point of the gradient (top-left)
        end={{ x: 1, y: 1 }} // End point of the gradient (bottom-right)
      >
        <View style={styles.box}>
          <Image source={require("../images/MarkyLogo.png")}></Image>
          <Text style={styles.text}>Marki: The AI Stock Picker</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "60%",
    alignContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientBox: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 10,
  },
  text: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
});
export default HomeScreen;
