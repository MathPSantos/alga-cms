import { useEffect } from "react";

export function usePageTitle(title: string) {
  const BASE_NAME = "AlgaCMS";

  useEffect(() => {
    document.title = `${BASE_NAME} - ${title}`;
  }, []);
}
