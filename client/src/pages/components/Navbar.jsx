import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full flex justify-between items-center p-4 bg-blue-600 text-white shadow-md fixed top-0"
    >
      <div className="text-2xl font-bold">SAKHI.Ai</div>
      <div className="flex space-x-4">
        <Button variant="ghost" className="text-white" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button
          variant="ghost"
          className="text-white"
          asChild
          onClick={() =>
            window.open(
              "https://spend-wise-expensetracker.vercel.app/",
              "_blank"
            )
          }
        >
          <Link to="/">Expense Tracker</Link>
        </Button>
        <Button
          variant="ghost"
          className="text-white"
          asChild
          onClick={() => window.open("http://localhost:5174", "_blank")}
        >
          <Link to="/">Q&A</Link>
        </Button>
        <Button variant="ghost" className="text-white" asChild>
          <Link to="/llm-conversation">Let&apos;s Chat</Link>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
