import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./paths/homeScreen";
import MainScreen from "./paths/mainScreen";
import AddNew from "./paths/addNewScreen";
// import save from "./helpers/storage";
import * as SecureStore from "expo-secure-store";
import DetailScreen from "./components/stockInfo";
import ModelInfo from "./paths/modelInfo";
import CurRank from "./paths/currentRankings";
import AboutUs from "./paths/aboutUs";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  // if (result) {
  //   alert("🔐 Here's your value 🔐 \n" + result);
  // } else {
  //   alert("No values stored under that key.");
  // }
  return result;
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add"
          component={AddNew}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={DetailScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ModelInfo"
          component={ModelInfo}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="CurRank"
          component={CurRank}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="About"
          component={AboutUs}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
