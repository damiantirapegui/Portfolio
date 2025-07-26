import "./App.css";
import React, { useEffect, useState } from "react";

import { Header__component } from "./components/header/Header__component.jsx";
import { LandingPage } from "./components/landing__page/LandingPage.jsx";
import { Timeline } from "./components/timeline/TimeLine.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header__component
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <LandingPage isDarkMode={isDarkMode} />
      <Timeline />
    </div>
  );
}

export default App;
