import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../colors";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
function TopBar() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Main")}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Image
          source={require("../images/MarkyLogo.png")}
          style={styles.image}
        ></Image>
        <Text
          style={{ fontSize: 20, color: "white", marginLeft: 10 }}
          onPress={() => navigation.navigate("CurRank")}
        >
          Home
        </Text>
      </Pressable>
      <Pressable>
        <Text
          style={{ fontSize: 20, color: "white" }}
          onPress={() => navigation.navigate("CurRank")}
        >
          Rankings
        </Text>
      </Pressable>
      <Pressable>
        <Text
          style={{ fontSize: 20, color: "white" }}
          onPress={() => navigation.navigate("About")}
        >
          About Marki
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.topBar,
    // paddingTop: 35,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  image: { width: 40, height: 40, resizeMode: "contain" },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 0.5,
    width: "70%",
    margin: 20,
    backgroundColor: "#1d2121ff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
  },
  textStyle: {
    color: colors.text,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
  },
  modalText: {
    // marginBottom: 15,
    fontSize: 40,
    textAlign: "center",
    color: colors.text,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default TopBar;
