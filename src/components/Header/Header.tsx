import React from "react";
import Logo from "./components/Logo/Logo";
import ButtonUsage from "../../common/Button/Button";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Logo />
      <ButtonUsage />
    </header>
  );
};

export default Header;
