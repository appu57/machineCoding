export const initialState = [];
export const Reducer = (state = initialState, action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "addFolder":
      if (action.id != -1) {
        console.log("statebefore rec", state);
        return recursiveAddition(state, action.id, action.value);
      }
      action.value["subFolder"] = [];
      return [...state, action.value];
    case "addFile":
      break;
    case "removeFile":
      break;
    default:
      return state;
  }
};

const recursiveAddition = (state, parentId, value) => {
  console.log("state", state);
  console.log(value);
  return state.map((item) => {
    if (item.id == parentId) {
      return {
        ...item,
        subFolder: [...item.subFolder, value],
      };
    }
    if (item.subMenu) {
      return {
        ...item,
        subMenu: recursiveAddition(item.subMenu, parentId, value),
      };
    }
    return item;
  });
};

// {
//     type:'',
//     id:0
//     name:'',
//     subFolder:[{}]
// }
