import { useEffect } from "react";

function useTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `PechinchaWeb | ${title}`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}

export default useTitle;
