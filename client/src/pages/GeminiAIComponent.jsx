import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { GET_CHAT_CONTENT_ROUTE, HOST } from "@/utils/constant";

const GeminiAIComponent = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${HOST}/${GET_CHAT_CONTENT_ROUTE}`, { question });
      setResponse(res.data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to fetch response. Please try again.");
    }
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="w-[100vw] h-[100vh] overflow-y-auto flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white p-10 rounded-lg shadow-2xl"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold mb-6"
      >
        Ask Me Anything
      </motion.h2>
      <motion.form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4"
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.3 }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          className="w-full p-3 border rounded-lg text-black"
          required
        />
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Loading..." : "Ask Me"}
        </motion.button>
      </motion.form>
      {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 mt-4 text-lg font-semibold">{error}</motion.p>}
      {response && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg mt-6 p-6 border rounded-lg bg-white text-black shadow-lg"
        >
          <h3 className="font-bold text-xl">Response:</h3>
          <p className="mt-2 text-lg">{response}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GeminiAIComponent;
