import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./core/styles/global";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {children}
    </BrowserRouter>
  );
}
