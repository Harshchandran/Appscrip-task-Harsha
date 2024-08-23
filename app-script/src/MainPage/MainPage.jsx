import React from "react";
import { NavBar } from "./NavBar";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { Content } from "./Content";

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <Title />
      <Content />
      <Footer />
    </>
  );
};
