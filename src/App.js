import mobile from './mobile.svg';
import desktop from './desktop.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(1)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <a href="https://discord.gg/8rDC46THMN">
      {(windowWidth > windowHeight) ?
        <img src={desktop} className="background-img" alt="background image"/>
      :
        <img src={mobile} className="background-img" alt="background image"/>
      }
    </a>
  );
}

export default App;
