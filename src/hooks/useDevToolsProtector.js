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

    // 1. Block Context Menu (Right Click)
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 2. Block Common Inspection Hotkeys
    const handleKeyDown = (e) => {
      // Disable F12 Key
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Disable Ctrl+Shift+I, J, C, K (Windows/Linux) and Cmd+Opt+I, J, C, K (macOS)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        ["I", "i", "J", "j", "C", "c", "K", "k"].includes(e.key)
      ) {
        e.preventDefault();
        return;
      }
      // Disable Ctrl+U (View Source) and Ctrl+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && ["U", "u", "S", "s"].includes(e.key)) {
        e.preventDefault();
        return;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // 3. Save Original Console Functions & Output Custom Banner
    const originalConsole = {
      log: console.log,
      clear: console.clear,
    };

    try {
      originalConsole.clear();
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
        "%c[!] RESTRICTED AREA\n" +
        "%cDeveloper console execution is disabled.\n" +
        "=========================================================";

      originalConsole.log(
        banner,
        "color: #00ffcc; font-weight: bold; font-family: monospace;", // border
        "color: #00ffff; font-weight: bold; font-family: monospace; text-shadow: 0 0 8px rgba(0,255,255,0.6);", // logo
        "color: #ffffff; font-weight: bold; font-family: monospace; font-size: 13px;", // developer name
        "color: #888888; font-family: monospace; font-size: 11px;", // agency
        "color: #00ffcc; font-weight: bold; font-family: monospace;", // border
        "color: #ff3366; font-weight: bold; font-size: 40px; font-family: sans-serif; text-shadow: 3px 3px 0px #000; padding: 10px 0;", // RESTRICTED AREA
        "color: #ff3366; font-weight: bold; font-size: 18px; font-family: sans-serif;" // Warning details
      );
    } catch (err) {}

    // 4. Override Default Console Functions to Limit Executed Output
    const warnRestricted = () => {
      try {
        originalConsole.log(
          "%c[!] Restricted: Command execution is disabled.",
          "color: #ff3366; font-weight: bold; font-family: monospace;"
        );
      } catch (e) {}
    };

    try {
      console.log = warnRestricted;
      console.info = warnRestricted;
      console.warn = warnRestricted;
      console.error = warnRestricted;
      console.debug = warnRestricted;
    } catch (err) {}

    // 5. Active Debugger Trap (Locks Console Commands)
    // Automatically pauses code execution when developer tools are opened.
    let trapTimeoutId;
    const startDebuggerTrap = () => {
      const runTrap = (index) => {
        try {
          (function () {
            return false;
          }
            .constructor("de" + "bu" + "gg" + "er")
            .call());
        } catch (err) {}
        trapTimeoutId = setTimeout(() => runTrap(index + 1), 50);
      };
      runTrap(0);
    };

    startDebuggerTrap();

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(trapTimeoutId);
    };
  }, []);
}
