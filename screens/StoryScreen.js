import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { storyChains } from "../data/stories";

export default function StoryScreen({ navigation, coins, setCoins, risk, setRisk }) {

  const getRandomChain = () =>
    storyChains[Math.floor(Math.random() * storyChains.length)];

  const [chain, setChain] = useState(getRandomChain());
  const [stageIndex, setStageIndex] = useState(0);
  const [choices, setChoices] = useState([]);

  const currentStage = chain.stages[stageIndex];

  // 🔀 Shuffle choices every time stage changes
  useEffect(() => {
    const choiceArray = [
      { type: "safe", text: currentStage.choices.safe.text },
      { type: "danger", text: currentStage.choices.danger.text },
    ];

    // Proper shuffle
    const shuffled = [...choiceArray].sort(() => Math.random() - 0.5);

    setChoices(shuffled);
  }, [stageIndex, chain]);

  const loadNextScenario = () => {
    let newChain = getRandomChain();

    while (newChain.id === chain.id) {
      newChain = getRandomChain();
    }

    setChain(newChain);
    setStageIndex(0);
  };

  const handleChoice = (type) => {
    const result = currentStage.choices[type];

    if (result.next === "fail") {
      setRisk(risk + 20);
      setCoins(coins - 300);
      navigation("gameover");
      return;
    }

    if (result.next === "success") {
      setCoins(coins + 500);
      setRisk(risk > 10 ? risk - 10 : 0);
      loadNextScenario();
      return;
    }

    if (result.next === "neutral") {
      setCoins(coins + 100);
      loadNextScenario();
      return;
    }

    const nextIndex = chain.stages.findIndex(s => s.id === result.next);
    setStageIndex(nextIndex);
  };

  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={globalStyles.container}>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 50,
            left: 15,
            backgroundColor: "#111827",
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
            elevation: 5,
            zIndex: 999,
          }}
          onPress={() => navigation("home")}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            ← Back
          </Text>
        </TouchableOpacity>

        <Text style={globalStyles.title}>{chain.title}</Text>

        <Text style={globalStyles.storyText}>
          {currentStage.text}
        </Text>

        {/* 🔀 RANDOMIZED BUTTONS */}
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={
              choice.type === "safe"
                ? globalStyles.safeButton
                : globalStyles.dangerButton
            }
            onPress={() => handleChoice(choice.type)}
          >
            <Text style={globalStyles.buttonText}>
              {choice.text}
            </Text>
          </TouchableOpacity>
        ))}

      </View>
    </ImageBackground>
  );
}