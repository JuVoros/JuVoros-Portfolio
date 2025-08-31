
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-900  to-black text-white">
      <Navbar />
      <div className="px-6">
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/projects" element={<Projects />} />
          {/* Add more shtuff */}
        </Routes>
      </div>
    </main>
  )
}

