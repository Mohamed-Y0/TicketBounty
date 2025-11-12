import { ThemeProvider as BaseThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <BaseThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};
