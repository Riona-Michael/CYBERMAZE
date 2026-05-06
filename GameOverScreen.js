import React from "react";
import { View, Text,ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import GameButton from "../components/GameButton";

export default function GameOverScreen({
  navigation,
}) {
  return (
  <ImageBackground
            source={require("../assets/bg9.jpg")}
            style={{ flex: 1 }}
            resizeMode="cover"
          >
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>GAME OVER</Text>

      <Text style={globalStyles.info}>
        Two-factor authentication is your best friend!
      </Text>

      {/* ✅ Go to Report instead of Play Again */}
      <GameButton
        title="View Security Report"
        type="safe"
        onPress={() => navigation("report")}
      />

      <GameButton
        title="Home"
        type="danger"
        onPress={() => navigation("home")}
      />
    </View>
    </ImageBackground>
  );
}