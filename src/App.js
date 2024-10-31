import React from "react";
import { useState } from "react";
import "./App.css";
import RunsSection from "./components/RunsSection";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";

import Teaching from "./components/Teaching/Teaching";
import MainSection from "./components/MainSection";

function App() {
  const [tab, setTab] = useState("run");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <Teaching />
            <MainSection />
          </>
        )}

        {tab === "run" && <RunsSection />}
      </main>
    </>
  );
}

export default App;