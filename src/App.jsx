import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DiscordSDK } from "@discord/embedded-app-sdk";
import ClickGame from "./ClickGame.jsx";
import TypingGame from "./TypingGame.jsx";

// Client ID を設定
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

function App() {
  useEffect(() => {
    const initDiscord = async () => {
      await discordSdk.ready();
      await discordSdk.authorize({
        client_id:import.meta.env.VITE_DISCORD_CLIENT_IDh,
        response_type: "code",
        scope: "identify",
      });
      console.log("✅ SDK Ready and Authorized");
    };
    initDiscord();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClickGame />} />
        <Route path="/typing" element={<TypingGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;