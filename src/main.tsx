import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AnimatedBackground from "./components/AnimatedBackground.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimatedBackground>
      <App />
    </AnimatedBackground>
  </StrictMode>
);
