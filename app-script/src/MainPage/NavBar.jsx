import React from "react";
import { NavbarPrimary } from "./NavbarPrimary";
import { NavBarSecondary } from "./NavBarSecondary";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

export const NavBar = () => {
  return (
    <>
      <div className="nav-Banner-Container">
        <div className="nav-Banner">
          <DashboardRoundedIcon />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="nav-Banner">
          <DashboardRoundedIcon />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="nav-Banner">
          <DashboardRoundedIcon />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>

      <div className="mobile-Nav-Banner-Container">
        <div className="nav-Banner">
          <DashboardRoundedIcon />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
      <NavbarPrimary />
      <NavBarSecondary />
    </>
  );
};
