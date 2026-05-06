import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import StoryScreen from "./screens/StoryScreen";
import PhishingScreen from "./screens/PhishingScreen";
import MalwareScreen from "./screens/MalwareScreen";
import ShopScreen from "./screens/ShopScreen";
import MiniGamesScreen from "./screens/MiniGamesScreen";
import GameOverScreen from "./screens/GameOverScreen";
import ReportScreen from "./screens/ReportScreen";

export default function App() {
  const [screen, setScreen] = useState("home");

  const [coins, setCoins] = useState(1000);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [risk, setRisk] = useState(0);
  const [score, setScore] = useState(0);
  const [malwareHits, setMalwareHits] = useState(0);
  const [malwareTimer, setMalwareTimer] = useState(20);

  // 🔥 NEW GLOBAL STATS
  const [mistakes, setMistakes] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (screen === "home")
    return <HomeScreen navigation={setScreen} coins={coins} risk={risk} />;

  if (screen === "story")
    return (
      <StoryScreen
        navigation={setScreen}
        coins={coins}
        setCoins={setCoins}
        risk={risk}
        setRisk={setRisk}
        setMistakes={setMistakes}
        setCorrectAnswers={setCorrectAnswers}
      />
    );

  if (screen === "minigames")
    return <MiniGamesScreen navigation={setScreen} />;

  if (screen === "phishing")
    return (
      <PhishingScreen
        navigation={setScreen}
        coins={coins}
        setCoins={setCoins}
        risk={risk}
        setRisk={setRisk}
        score={score}
        setScore={setScore}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
        wrongAnswers={wrongAnswers}
        setWrongAnswers={setWrongAnswers}
      />
    );

  if (screen === "malware")
    return (
      <MalwareScreen
        navigation={setScreen}
        coins={coins}
        setCoins={setCoins}
        malwareHits={malwareHits}
        setMalwareHits={setMalwareHits}
        timer={malwareTimer}
        setTimer={setMalwareTimer}
        resetTimer={() => setMalwareTimer(20)}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
        wrongAnswers={wrongAnswers}
        setWrongAnswers={setWrongAnswers}
      />
    );

  if (screen === "gameover")
    return (
      <GameOverScreen
        navigation={setScreen}
      />
    );

  if (screen === "report")
    return (
      <ReportScreen
        navigation={setScreen}
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
        risk={risk}   // ✅ THIS MUST EXIST
        score={score}
        malwareHits={malwareHits}
        resetGame={() => {
          setScore(0);
          setCorrectAnswers(0);
          setWrongAnswers(0);
          setMalwareHits(0);
          setRisk(0);
        }}
      />
    );

  if (screen === "Shop")
    return (
      <ShopScreen
        navigation={setScreen}
        coins={coins}
        setCoins={setCoins}
        risk={risk}
        setRisk={setRisk}
      />
    );
}