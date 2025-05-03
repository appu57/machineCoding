import "./styles.css";
import nestedJSON from "./nested.json";
import { NestedOption } from "./NestedOption";
import { useState } from "react";
export default function App() {
  const updateCheckedRecursively = (
    nodes,
    id,
    parentId = null,
    alreadyChecked = false
  ) => {
    return nodes.map((node) => {
      if (node.id === id) {
        // Target node: toggle and optionally all its children
        const isChecked = node.checked === 0;
        return {
          ...node,
          checked: isChecked ? node.subMenu?.length || 1 : 0,
          subMenu: node.subMenu
            ? updateCheckedRecursively(
                node.subMenu,
                -1, // no specific id for children
                node.id,
                !isChecked
              )
            : node.subMenu,
        };
      }

      // If this is not the node, check its children
      if (node.subMenu) {
        const updatedSubMenu = updateCheckedRecursively(
          node.subMenu,
          id,
          node.id,
          alreadyChecked
        );

        // Update parent `checked` count based on checked children
        const checkedCount = updatedSubMenu.filter((n) => n.checked > 0).length;

        return {
          ...node,
          subMenu: updatedSubMenu,
          checked: checkedCount,
        };
      }

      return node;
    });
  };

  const [nestedData, setNestedData] = useState(nestedJSON);
  const recursiveIncrementCounter = (id, parentId, alreadyChecked) => {
    setNestedData((prev) => {
      const updatedMenu = updateCheckedRecursively(
        prev.menu,
        id,
        parentId,
        alreadyChecked
      );
      return { ...prev, menu: updatedMenu };
    });
  };
  const incrementTheCounter = (id, parentId, alreadyChecked) => {
    setNestedData((prev) => {
      const updatedMenu = prev.menu.map((item) => {
        // Case 1: Toggle count on second-level parent (with parentId)
        if (item.id === parentId) {
          return {
            ...item,
            checked: alreadyChecked ? item.checked - 1 : item.checked + 1,
          };
        }

        // Case 2: Toggle all submenus if top-level item clicked (no parentId)
        if (!parentId && item.id === id) {
          const updatedSubMenu = item.subMenu.map((subMenu) => {
            return {
              ...subMenu,
              checked: subMenu.checked === 0 ? subMenu.subMenu.length : 0,
              subMenu: subMenu.subMenu.map((thirdLevel) => ({
                ...thirdLevel,
                checked: subMenu.checked === 0 ? 1 : 0,
              })),
            };
          });
          return {
            ...item,
            subMenu: updatedSubMenu,
            checked: item.checked === 0 ? item.subMenu.length : 0,
          };
        }

        // Case 3: Third-level toggle (when parentId refers to second-level item)
        const updatedSubMenu = item.subMenu.map((subMenu) => {
          if (subMenu.id === parentId) {
            const newSubMenu = subMenu.subMenu.map((third) => {
              if (third.id === id) {
                return {
                  ...third,
                  checked: third.checked ? 0 : 1,
                };
              }
              return third;
            });

            const checkedCount = newSubMenu.filter((el) => el.checked).length;

            return {
              ...subMenu,
              subMenu: newSubMenu,
              checked: checkedCount,
            };
          }
          return subMenu;
        });

        return {
          ...item,
          subMenu: updatedSubMenu,
        };
      });

      return { ...prev, menu: updatedMenu };
    });
  };
  return (
    <div className="App">
      <h1>Nested Checkbox</h1>
      <div className="wrapper">
        {nestedData &&
          nestedData?.menu.map((item, index) => {
            return (
              <div>
                <NestedOption
                  key={index}
                  menu={item}
                  incrementTheCounter={incrementTheCounter}
                  parentId={item?.parentId}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
