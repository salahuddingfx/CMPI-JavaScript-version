import { createContext, useContext, useMemo } from "react";
import { useInstituteData } from "@/hooks/useInstituteData";

const InstituteDataContext = createContext(undefined);

export function InstituteDataProvider({ children }) {
  const { data, loading, error } = useInstituteData();

  const value = useMemo(
    () => ({ data, loading, error }),
    [data, loading, error],
  );

  return (
    <InstituteDataContext.Provider value={value}>
      {children}
    </InstituteDataContext.Provider>
  );
}

export function useInstituteContext() {
  const context = useContext(InstituteDataContext);
  if (!context) {
    throw new Error(
      "useInstituteContext must be used within InstituteDataProvider",
    );
  }
  return context;
}
