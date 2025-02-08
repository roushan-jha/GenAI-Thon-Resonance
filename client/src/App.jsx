import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QA from "./pages/QA";
// eslint-disable-next-line no-unused-vars
import Navbar from "./pages/components/Navbar";
import GeminiAIComponent from "./pages/GeminiAIComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/llm-conversation" element={<GeminiAIComponent />} />
      </Routes>
    </Router>
  );
}

export default App;