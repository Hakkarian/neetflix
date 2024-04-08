import React from "react";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import AppCss from "./App.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppCss>
      <Router>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/about" element={<HomeScreen />} />
        </Routes>
      </Router>
    </AppCss>
  );
}

export default App;
