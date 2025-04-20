import "./styles.css";
import { useEffect, useState, useRef } from "react";
import menuDropdownOptions from "./menu.json";
import { MenuOption } from "./MenuOptions";

export default function App() {
  return (
    <div className="wrapper">
      {menuDropdownOptions.menu?.map((menu, index) => (
        <MenuOption key={index} menuData={menu} />
      ))}
    </div>
  );
}
