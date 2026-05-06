import React from "react";
import { View, Text, TouchableOpacity,ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import GameButton from "../components/GameButton";

export default function HomeScreen({ navigation, coins, risk }) {
  return (
    <ImageBackground
      source={require("../assets/bg8.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Centered Container */}
      <View style={globalStyles.container}>

        <TouchableOpacity
          style={globalStyles.shopButton}
          onPress={() => navigation("Shop")}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            🛒 Shop
          </Text>
        </TouchableOpacity>

        <Text style={globalStyles.title}>Cyber Maze</Text>
         <Text style={globalStyles.info}>Decode the Maze. Survive the Chaos.</Text>
        <Text style={globalStyles.info}>Coins: {coins}</Text>
        <Text style={globalStyles.info}>Risk Level: {risk}%</Text>

        <GameButton
          title="Main Story"
          onPress={() => navigation("story")}
        />

        <GameButton
          title="Mini Games"
          onPress={() => navigation("minigames")}
        />

      </View>
    </ImageBackground>
  );
}