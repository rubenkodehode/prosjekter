import { createContext, useState, useEffect } from "react";

export const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("fontSize") || "medium";
  });

  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem("highContrast") === "true";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-font-size", fontSize);
    document.documentElement.setAttribute(
      "data-high-contrast",
      highContrast ? "true" : "false"
    );
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("highContrast", highContrast);
  }, [fontSize, highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{ fontSize, setFontSize, highContrast, setHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}
