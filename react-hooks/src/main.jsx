import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./components/Counter.jsx";
import ToggleButton from "./components/ToggleButton.jsx";
import TextInput from "./components/TextInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextInput />
  </StrictMode>
);
