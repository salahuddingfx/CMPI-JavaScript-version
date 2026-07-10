import { useEffect } from "react";

export function useDevToolsProtector() {
  useEffect(() => {
    console.log(
      `%c  CMPI — Cox's Bazar Model Polytechnic Institute  `,
      "color: #00ffcc; font-weight: bold; font-family: monospace; font-size: 13px;"
    );
  }, []);
}
