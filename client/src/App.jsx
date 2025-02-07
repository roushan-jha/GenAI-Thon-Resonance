import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QA from "./pages/QA";
import LLMConversation from "./pages/LLMConversation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/llm-conversation" element={<LLMConversation />} />
      </Routes>
    </Router>
  );
}

export default App;