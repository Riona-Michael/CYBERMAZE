import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function GameButton({ title, type = "normal", onPress }) {
  let style;

  if (type === "safe") style = globalStyles.safeButton;
  else if (type === "danger") style = globalStyles.dangerButton;
  else style = globalStyles.button;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
