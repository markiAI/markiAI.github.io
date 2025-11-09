import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SecureStore from "expo-secure-store";
import { useFocusEffect } from "@react-navigation/native";
import { TextInput, ScrollView } from "react-native-web";
export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    // console.log(key + " does not exist");
  }
  return result;
}
function StockList() {
  const DATA = require("../data/stocks_cleaned.json");
  const navigation = useNavigation();
  const [searchQ, setSearchQ] = useState("");
  const filteredData = DATA.filter(
    (item) => item.title.includes(searchQ.toUpperCase()) // since you auto-capitalize
  );
  const AsyncStockItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://benthebenno.github.io/" +
                item.title[0] +
                "/" +
                item.title +
                "_all_data.png",
            }}
            resizeMode="cover"
          ></Image>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Pressable
            style={styles.buttonBack}
            onPress={() =>
              navigation.navigate("Info", {
                pageTitle: item.title,
                pageContent: "hlrpprtgrlpglrg",
                pageId: item.id,
                imagePath2Weeks:
                  "https://benthebenno.github.io/" +
                  item.title[0] +
                  "/" +
                  item.title +
                  "_2weeks.png",
                imagePath1Month:
                  "https://benthebenno.github.io/" +
                  item.title[0] +
                  "/" +
                  item.title +
                  "_1month.png",
                imagePathAll:
                  "https://benthebenno.github.io/" +
                  item.title[0] +
                  "/" +
                  item.title +
                  "_all_data.png",
              })
            }
          >
            <FontAwesome
              name="long-arrow-right"
              size={45}
              color={colors.text}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.topPart}>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput
            placeholder="Search"
            style={styles.textBox}
            value={searchQ}
            onChangeText={setSearchQ}
            autoCapitalize="characters"
          ></TextInput>
        </View>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <AsyncStockItem item={item} />}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  buttonBack: {
    // width: 100,
    // height: 100,
    // flex: -1,
    backgroundColor: "#000000ff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
  },
  itemContainer: {
    alignSelf: "center",
    backgroundColor: "#D5E2F4",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: 750,
    height: 500,
    // flex: -1,
  },
  image: {
    // flex: 1,
    aspectRatio: 0.25,
    height: 400,
    width: 500,
    borderRadius: 10,
  },
  imageBox: {
    // flex: 1,
    // width: 100,
    // height: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    width: "100%",
  },
  topPart: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  title: {
    fontSize: 28,
    color: colors.text,
    fontWeight: "heavy",
  },
  searchBox: {
    backgroundColor: colors.box,
    borderRadius: 10,
    width: "60%",
    flexDirection: "row",
    alignContent: "center",
    alignContent: "center",
    padding: 5,
    marginBottom: 50,
  },
  textBox: {
    backgroundColor: colors.box,
    paddingLeft: 5,
    width: "60%",
    height: "100%",
  },
});

export default StockList;
