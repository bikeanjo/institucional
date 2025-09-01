import React, { useEffect, PropsWithChildren } from "react";
import * as images from "@assets/header";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    Object.values(images as { [key: string]: string }).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return <>{children}</>;
};

export default AppWrapper;
