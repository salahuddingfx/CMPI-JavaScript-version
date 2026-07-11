import { useEffect } from "react";

export function useDevToolsProtector() {
  useEffect(() => {
    // Only run in production OR if testing query parameter is present: ?test_protection=true
    const isProduction = import.meta.env.PROD;
    const isTestMode =
      typeof window !== "undefined" &&
      window.location.search.includes("test_protection=true");

    if (!isProduction && !isTestMode) {
      return;
    }

    try {
      console.clear();
      const banner = 
        "%c=========================================================\n" +
        "%c      _____ __  __ _____ _____\n" +
        "     / ____|  \\\\/  |  __ \\\\_   _|\n" +
        "    | |    | \\\\  / | |__) || |\n" +
        "    | |    | |\\\\/| |  ___/ | |\n" +
        "    | |____| |  | | |    _| |_\n" +
        "     \\\\_____|_|  |_|_|   |_____|\n\n" +
        "%c    >> Developed by: Salah Uddin Kader\n" +
        "%c    >> Agency: Nextora Studio (https://nextorastudio.tech)\n" +
        "%c=========================================================\n" +
        "%c[!] RESTRICTED ZONE\n" +
        "%cThis console is for developer use only. Please respect the system integrity.\n" +
        "=========================================================";

      console.log(
        banner,
        "color: #00ffcc; font-weight: bold; font-family: monospace;", // border
        "color: #00ffff; font-weight: bold; font-family: monospace; text-shadow: 0 0 8px rgba(0,255,255,0.6);", // logo
        "color: #ffffff; font-weight: bold; font-family: monospace; font-size: 13px;", // developer name
        "color: #888888; font-family: monospace; font-size: 11px;", // agency
        "color: #00ffcc; font-weight: bold; font-family: monospace;", // border
        "color: #ff3366; font-weight: bold; font-size: 28px; font-family: sans-serif; text-shadow: 1px 1px 0px #000; padding: 5px 0;", // RESTRICTED ZONE
        "color: #ffffff; font-size: 14px; font-family: sans-serif;" // Warning details
      );
    } catch (err) {}
  }, []);
}
