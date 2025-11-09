// Inside HomeScreen.js
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import TopBar from "../components/topBar";
import StockList from "../components/stockList";

function MainScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2f4471ff", "#051030ff"]} // Array of colors for the gradient
        style={styles.gradientBox}
        start={{ x: 0, y: 0 }} // Start point of the gradient (top-left)
        end={{ x: 1, y: 1 }} // End point of the gradient (bottom-right)
      >
        <TopBar></TopBar>
        <StockList></StockList>
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
    // justifyContent: "center",
    // alignItems: "center",
  },
  gradientBox: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 10,
  },
  text: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
});
export default MainScreen;
