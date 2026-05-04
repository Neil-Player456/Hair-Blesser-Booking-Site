import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { AppRoutes } from "./routes/AppRoutes";
import SplashIntro from "./components/SplashIntro";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashIntro onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <>
          <Navbar />
          <AppRoutes />
        </>
      )}
    </>
  );
};

export default App;