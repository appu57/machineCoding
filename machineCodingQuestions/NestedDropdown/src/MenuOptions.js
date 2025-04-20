import React, { useState } from "react";
export const MenuOption = React.memo(({ menuData }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const handleClick = () => {
    if (menuData.subMenu) {
      setOpenSubMenu((prev) => !prev);
    }
  };
  return (
    <div className="wrapper">
      <div className="MenuOption" onClick={handleClick}>
        {menuData.name}
      </div>
      {openSubMenu && (
        <div className="wrapper">
          {menuData.subMenu?.map((menu, index) => (
            <MenuOption key={index} menuData={menu} />
          ))}
        </div>
      )}
    </div>
  );
});
