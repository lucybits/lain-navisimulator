import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import BootScreen from "./components/BootScreen";
import MainInterface from "./components/MainInterface";
import NaviShowcase from "./components/NaviShowcase";

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            bootComplete ? (
              <MainInterface />
            ) : (
              <BootScreen onFinish={() => setBootComplete(true)} />
            )
          }
        />

        <Route path="/navi-showcase" element={<NaviShowcase />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
