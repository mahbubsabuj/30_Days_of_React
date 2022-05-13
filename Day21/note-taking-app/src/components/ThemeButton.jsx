import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeButton = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="theme"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    ></IconButton>
  );
};

export default ThemeButton;
