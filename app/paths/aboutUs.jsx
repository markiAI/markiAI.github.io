import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import TopBar from "../components/topBar";
import StockList from "../components/stockList";

function AboutUs() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar></TopBar>
      <LinearGradient
        colors={["#2f4471ff", "#051030ff"]} // Array of colors for the gradient
        style={styles.gradientBox}
        start={{ x: 0, y: 0 }} // Start point of the gradient (top-left)
        end={{ x: 1, y: 1 }} // End point of the gradient (bottom-right)
      >
        <Text style={styles.title}>
          Welcome to Marki: The AI Stock Picker!!!
        </Text>
        <Text style={styles.subText}>Welcome to Marki a stock predicition</Text>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: colors.secondText,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: 100,
    marginTop: 20,
  },
  subText: {
    marginTop: 14,
    fontSize: 14,
    marginLeft: 10,
    color: colors.secondText,
  },
  gradientBox: {
    width: "100%",
    height: "100%",
  },
});
export default AboutUs;
