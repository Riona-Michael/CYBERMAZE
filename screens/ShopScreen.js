import React from "react";
import { View, Text, TouchableOpacity,ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import GameButton from "../components/GameButton";

export default function ShopScreen({
  navigation,
  coins,
  setCoins,
  risk,
  setRisk,
  extraTimeUsed,
  setExtraTimeUsed,
  setTimer,
}) {
  const shopItems = [
    { id: 1, name: "Extra Time", cost: 500 },
    { id: 3, name: "Risk Reducer", cost: 200 },
  ];

  const buyItem = (item) => {
    if (coins < item.cost) {
      alert("Not enough coins! X");
      return;
    }

    setCoins(coins - item.cost);
    alert(`:> Purchased ${item.name}!`);

    if (item.name === "Risk Reducer") {
      const newRisk = risk - 20 >= 0 ? risk - 20 : 0;
      setRisk(newRisk);
      alert(`⚡ Risk reduced! New Risk: ${newRisk}%`);
    }

    if (item.name === "Extra Time" && !extraTimeUsed) {
      alert("⏱ 5 seconds added to Malware timer!");
    }
  };

  return (
  <ImageBackground
            source={require("../assets/bg2.jpg")}
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

      <Text style={globalStyles.title}>Mini Shop</Text>
      <Text style={globalStyles.info}>Prepare. Protect. Power Up.</Text>
      <Text style={globalStyles.info}>Coins: {coins}</Text>

      {shopItems.map((item) => (
        <GameButton
          key={item.id}
          title={`${item.name} - ${item.cost}💰`}
          type="safe"
          onPress={() => buyItem(item)}
        />
      ))}
    </View>
    </ImageBackground>
  );
}