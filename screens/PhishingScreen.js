import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert,ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import GameButton from "../components/GameButton";
import { phishingEmails } from "../data/phishingEmails";

export default function PhishingScreen({
  navigation,
  coins,
  setCoins,
  risk,
  setRisk,
  score,
  setScore,
  correctAnswers,
  setCorrectAnswers,
  wrongAnswers,
  setWrongAnswers,
}) {
  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const [shuffledEmails] = useState(shuffleArray(phishingEmails));
  const [index, setIndex] = useState(0);

  const handleChoice = (choice) => {
    const currentEmail = shuffledEmails[index];

    if (choice === currentEmail.correct) {
      // ✅ Correct
      setCoins(prev => prev + 100);
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1);

      if (index < shuffledEmails.length - 1) {
        setIndex(prev => prev + 1);
      } else {
        navigation("report");
      }

    } else {
      // ❌ Wrong
      setCoins(prev => prev - 150);
      setRisk(prev => prev + 10);
      setWrongAnswers(prev => prev + 1);

      Alert.alert(
        "❗ Phishing Detected!",
        "This email was phishing because:\n\n• Fake domain\n• Urgent language\n• Suspicious link"
      );

      navigation("gameover");
    }
  };

  return (
  <ImageBackground
        source={require("../assets/bg10.jpg")}
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
      <Text style={globalStyles.title}>Phishing Detector</Text>
      <Text style={globalStyles.info}>Every email, every link, every message could be a trap. Will you detect the fraud and survive the cyber maze?</Text>
      <Text style={globalStyles.storyText}>
        Email: {shuffledEmails[index].text}
      </Text>

      <GameButton
        title="Phishing"
        type="danger"
        onPress={() => handleChoice(true)}
      />

      <GameButton
        title="Legitimate"
        type="safe"
        onPress={() => handleChoice(false)}
      />

      <Text style={globalStyles.info}>Score: {score}</Text>
    </View>
    </ImageBackground>
  );
}