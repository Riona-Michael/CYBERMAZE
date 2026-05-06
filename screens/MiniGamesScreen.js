import React from "react";
import { View, Text, TouchableOpacity,ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import GameButton from "../components/GameButton";

export default function MiniGamesScreen({ navigation }) {
  return (
  <ImageBackground
        source={require("../assets/bg7.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
    <View style={globalStyles.container}>

      <TouchableOpacity
        style={globalStyles.backButton}
        onPress={() => navigation("home")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          ← Back
        </Text>
      </TouchableOpacity>

      <Text style={globalStyles.title}>Mini Games</Text>
      <Text style={globalStyles.info}>Mini Mazes, Maximum Danger!</Text>

      <GameButton
        title="Phishing Classifier"
        type="safe"
        onPress={() => navigation("phishing")}
      />

      <GameButton
        title="Squash Malware"
        type="danger"
        onPress={() => navigation("malware")}
      />

    </View>
    </ImageBackground>
  );
}