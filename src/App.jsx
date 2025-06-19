import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClickGame from "./ClickGame.jsx";
import TypingGame from "./TypingGame.jsx";

function App() {
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

