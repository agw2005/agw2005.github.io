import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Resume from "./pages/Resume/Resume.tsx";
import Documents from "./pages/Documents/Documents.tsx";
import AnimatedBackground from "./components/AnimatedBackground.tsx";
import TranscriptEnglish from "./pages/Transcript/TranscriptEnglish.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route
          index
          element={
            <AnimatedBackground>
              <App />
            </AnimatedBackground>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/transcript" element={<TranscriptEnglish />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
