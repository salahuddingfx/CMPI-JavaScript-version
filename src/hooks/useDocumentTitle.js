import React from "react";
import { Helmet } from "react-helmet-async";

export function useDocumentTitle(title) {
  return React.createElement(Helmet, { title });
}
