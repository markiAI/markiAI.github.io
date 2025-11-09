import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import TopBar from "../components/topBar";
import StockList from "../components/stockList";
import { ScrollView } from "react-native-web";
import { readRemoteFile } from "react-native-csv";
import { useState, useEffect } from "react";

function CurRank() {
  const [csvData, setCsvData] = useState([]);
  const csvFileUrl = "https://benthebenno.github.io/jesse_score_rankings.csv"; // Replace with your actual URL

  readRemoteFile(csvFileUrl, {
    complete: (results) => {
      console.log("Parsed CSV data:", results.data);
      // results.data will contain the parsed CSV data as an array of arrays or objects
    },
    error: (error) => {
      console.error("Error parsing CSV:", error);
    },
    // Optional: Add other configuration options like header: true if your CSV has a header row
  });

  useEffect(() => {
    readRemoteFile(csvFileUrl, {
      complete: (results) => {
        setCsvData(results.data);
        // console.log("csv parsed");
        // console.log(csvData);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
      },
      header: true, // If your CSV has a header row
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TopBar></TopBar>
      <LinearGradient
        colors={["#2f4471ff", "#051030ff"]} // Array of colors for the gradient
        style={styles.gradientBox}
        start={{ x: 0, y: 0 }} // Start point of the gradient (top-left)
        end={{ x: 1, y: 1 }} // End point of the gradient (bottom-right)
      >
        {/* <ScrollView> */}
        <View style={styles.heading}>
          <Text style={{ color: "white" }}>Rank</Text>
          <Text style={{ color: "white" }}>Stock-Percent</Text>
          <Text style={{ color: "white" }}>Change</Text>
        </View>
        <View style={{ flex: 1, paddingTop: 15 }}>
          {csvData.length > 0 ? (
            <FlatList
              data={csvData}
              renderItem={({ item }) => (
                <View style={styles.singleItem}>
                  <Text style={{ color: "white" }}>{item.Rank}</Text>
                  <Text style={{ color: "white" }}>{item.Stock}</Text>
                  <Text style={{ color: "white" }}>
                    {item.Predicted_Change_Percent}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <Text>Loading CSV data...</Text>
          )}
        </View>
        {/* </ScrollView> */}
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    // justifyContent: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  title: {
    fontSize: 26,
    alignSelf: "center",
    fontWeight: 99,
    // marginTop: 25,
  },
  gradientBox: {
    width: "100%",
    height: "100%",
  },
  singleItem: {
    alignSelf: "center",
    flexDirection: "row",
    // justifyContent: "center",
    justifyContent: "space-between",
    width: "60%",
  },
});
export default CurRank;
