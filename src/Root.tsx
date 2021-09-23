import { ReactNode } from "react";

import GlobalStyles from "./styles/global";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return <GlobalStyles>{children}</GlobalStyles>;
}
