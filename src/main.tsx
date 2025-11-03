import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Resume from "./pages/Resume/Resume.tsx";
import Documents from "./pages/Documents/Documents.tsx";
import AnimatedBackground from "./components/AnimatedBackground.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
