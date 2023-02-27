// import { useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import "./app.css";
import { Countdown } from "./components/Countdown";
import { Links } from "./components/Links";

function AppWrapper({ children }: { children: JSXInternal.Element }) {
  return (
    <>
      <div className="AppImageWrapper">
        <div className="AppBodyImage"></div>
        <div className="AppFooterImage"></div>
      </div>
      {children}
    </>
  );
}

export function App() {
  return (
    <AppWrapper>
      <div className="AppWrapper">
        <div className="AppBody">
          <h3 className="AppHeading">WE'RE LAUNCHING SOON</h3>
          <Countdown />
        </div>
        <div className="AppFooter">
          <Links />
        </div>
      </div>
    </AppWrapper>
  );
}
