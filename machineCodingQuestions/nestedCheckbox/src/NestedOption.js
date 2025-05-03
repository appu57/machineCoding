import { useState } from "react";

export const NestedOption = ({ menu, incrementTheCounter, parentId }) => {
  const [currChecked, setCurrChecked] = useState(false);
  const [openNestedOptions, setOpenNestedOptions] = useState(false);
  const incrementCheckBox = () => {
    setCurrChecked((prev) => !prev);
    console.log(currChecked);
    incrementTheCounter(menu.id, parentId, currChecked);
  };
  return (
    <div className="item__wrapper">
      <div className="options">
        <input
          type="checkbox"
          name="checked"
          checked={
            menu.subMenu && !currChecked
              ? menu.checked == menu.subMenu.length || currChecked
              : currChecked
          }
          onChange={incrementCheckBox}
        />
        <p onClick={(e) => setOpenNestedOptions((prev) => !prev)}>
          {menu.name}
        </p>
      </div>
      <div className="inner_options">
        {openNestedOptions &&
          menu.subMenu?.map((item, index) => {
            return (
              <NestedOption
                menu={item}
                incrementTheCounter={incrementTheCounter}
                parentId={item?.parentId}
              />
            );
          })}
      </div>
    </div>
  );
};
