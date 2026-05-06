import React from "react";
import { View, Text,ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import GameButton from "../components/GameButton";

export default function ReportScreen({
  navigation,
  correctAnswers,
  wrongAnswers,
  risk,
  score,
  malwareHits,
  resetGame,
}) {
  const total = correctAnswers + wrongAnswers;
  const accuracy =
    total > 0 ? ((correctAnswers / total) * 100).toFixed(1) : 0;

  return (
  <ImageBackground
          source={require("../assets/bg6.jpg")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
    <View style={globalStyles.container}>

      <Text style={globalStyles.title}>Report</Text>

      <Text style={globalStyles.info}>Score: {score}</Text>
      <Text style={globalStyles.info}>Accuracy: {accuracy}%</Text>
      <Text style={globalStyles.info}>Risk: {risk}%</Text>
      <Text style={globalStyles.info}>Malware Removed: {malwareHits}</Text>
      <Text style={globalStyles.info}> Phished emails Correct: {correctAnswers}</Text>
      <Text style={globalStyles.info}>Wrong: {wrongAnswers}</Text>

      <GameButton
        title="Home"
        type="danger"
        onPress={() => {
          resetGame();
          navigation("home");
        }}
      />

    </View>
    </ImageBackground>
  );
}