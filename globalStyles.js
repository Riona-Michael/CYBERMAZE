import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: "monospace",
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
    textShadowColor: "#c0278f",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  info: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    textShadowColor: "#d1f7ff",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontWeight: "bold",
  },
  storyText: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  shopButton: {
    position: "absolute",
    top: 50,
    left: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
    zIndex: 999,
  },
  buttonText: {
    color: "white",       // make text visible
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,         // optional
  },
  backButton: {
    position: "absolute",
    top: 60,      // adjust if too high/low
    left: 20,
    zIndex: 999,  // make sure it's above everything
  },

 safeButton: {
   backgroundColor: "transparent", // make transparent
   borderWidth: 2,                 // optional border
   borderColor: "#F8F6F0",         // green border for safe
   padding: 15,
   margin: 10,
   borderRadius: 8,
   width: "80%",
 },

 dangerButton: {
   backgroundColor: "transparent",
   borderWidth: 2,
   borderColor: "#F8F6F0",         // red border for danger
   padding: 15,
   margin: 10,
   borderRadius: 8,
   width: "80%",
 },

 button: {
   backgroundColor: "transparent",
   borderWidth: 2,
   elevation: 2,
   borderColor: "#d1f7ff",         // blue border for normal button
   padding: 15,
   margin: 10,
   borderRadius: 8,
   width: "80%",
 },
});