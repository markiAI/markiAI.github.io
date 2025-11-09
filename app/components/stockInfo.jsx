import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { colors } from "../colors";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "./topBar";
import { Pressable } from "react-native";
import { save } from "../paths/addNewScreen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-web";
import { useState, useEffect } from "react";
import { readRemoteFile } from "react-native-csv";

function DetailScreen({ route }) {
  const {
    pageTitle,
    pageContent,
    pageId,
    imagePath2Weeks,
    imagePath1Month,
    imagePathAll,
  } = route.params;
  const navigation = useNavigation();
  const csvFileUrl = "https://benthebenno.github.io/jesse_score_rankings.csv"; // Replace with your actual URL
  const [csvData, setCsvData] = useState([]);

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
      <ScrollView>
        <LinearGradient
          colors={["#2f4471ff", "#051030ff"]} // Array of colors for the gradient
          style={styles.gradientBox}
          start={{ x: 0, y: 0 }} // Start point of the gradient (top-left)
          end={{ x: 1, y: 1 }} // End point of the gradient (bottom-right)
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}>{pageTitle}</Text>
          </View>
          <View>
            <Text style={styles.subheading}>All Data</Text>
            <Image
              source={{ uri: imagePathAll }}
              style={styles.image}
              resizeMode="contain"
            ></Image>
          </View>
          <View>
            <Text style={styles.subheading}>Last Month</Text>
            <Image
              source={{ uri: imagePath1Month }}
              style={styles.image}
              resizeMode="contain"
            ></Image>
          </View>
          <View>
            <Text style={styles.subheading}>Two Weeks</Text>
            <Image
              source={{ uri: imagePath2Weeks }}
              style={styles.image}
              resizeMode="contain"
            ></Image>
          </View>
          {csvData.length > 0 ? (
            csvData
              .filter((item) => item.Stock === pageTitle)
              .map((item, index) => (
                <View style={styles.manyItems} key={index}>
                  <Text style={styles.miniText}>Rank: {item.Rank}</Text>
                  <Text style={styles.miniText}>Stock: {item.Stock}</Text>
                  <Text style={styles.miniText}>
                    Change: {item.Predicted_Change_Percent}
                  </Text>
                </View>
              ))
          ) : (
            <Text>Loading CSV data...</Text>
          )}
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 85,
    color: colors.secondText,
    fontWeight: 80,
  },
  titleBox: {
    marginTop: 40,
    alignSelf: "center",
    marginBottom: 25,
  },
  gradientBox: {
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 10,
  },
  removeButton: {
    alignSelf: "center",
    width: 250,
    height: 35,
    backgroundColor: "#C82323",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 200,
    // : "flex-end",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
  },
  subheading: {
    // alignItems: "center",
    alignSelf: "center",
    fontSize: 24,
    color: colors.secondText,
    // marginLeft: 25,
  },
  image: {
    width: 350,
    height: 350,
    // borderRadius: ,
    alignSelf: "center",
  },
  manyItems: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  miniText: {
    color: colors.secondText,
    fontSize: 20,
  },
});
export default DetailScreen;
