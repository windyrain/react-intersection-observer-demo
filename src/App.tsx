import { useState } from "react";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import "./App.css";

function App() {
  const [showType, setShowType] = useState(0);

  return (
    <div className="App">
      {showType === 0 && <Home handleShowTypeChange={setShowType} />}
      {showType === 1 && <Page1 handleShowTypeChange={setShowType} />}
      {showType === 2 && <Page2 handleShowTypeChange={setShowType} />}
      {showType === 3 && <Page3 handleShowTypeChange={setShowType} />}
      {showType === 4 && <Page4 handleShowTypeChange={setShowType} />}
      {showType === 5 && <Page5 handleShowTypeChange={setShowType} />}
    </div>
  );
}

export default App;
