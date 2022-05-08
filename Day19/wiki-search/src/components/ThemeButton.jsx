import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeButton = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="search"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    ></IconButton>
  );
};

export default ThemeButton;
