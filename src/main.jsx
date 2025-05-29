import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const htmlRaw = document.getElementById("root");
// const root = createRoot(htmlRaw);
// root.render(<App />);

createRoot(document.getElementById("root")).render(
 // stricmode components use karna lazmi nhi hai bs best practice kay liye aur Ye React ka guard dog hai — dev time mein bugs pakadta hai, production mein chup rehta hai
  <StrictMode>
    <App />
  </StrictMode>
);
