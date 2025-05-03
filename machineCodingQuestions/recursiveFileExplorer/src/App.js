import { useState, useEffect, useReducer } from "react";
import "./styles.css";
import { Reducer, initialState } from "./FolderReducer";
import { NestedOption } from "./NestedOption";

export default function App() {
  const [addFolder, setAddFolder] = useState("");
  const [fieldValues, setFieldValues] = useState({
    type: "",
    name: "",
    id: -1,
  });
  const [addFile, setAddFile] = useState(false);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const addNewFolder = (type) => {
    setAddFolder(type);
  };
  const handleValueChange = (e, type, item?) => {
    const newId = item
      ? item.id + 1
      : state.length > 0
      ? state[state.length - 1]?.id + 1
      : 1;
    setFieldValues({
      type: type,
      name: e.target.value,
      id: newId,
    });
  };
  const onSubmit = (item) => {
    dispatch({
      type: "addFolder",
      id: item ? item.id : -1,
      value: fieldValues,
    });
    setFieldValues({ type: "", name: "", id: 0 });
    setAddFolder("");
  };
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="wrapper">
      <div className="button__wrapper">
        <button onClick={(e) => addNewFolder("folder")}>Add Folder</button>
        <button onClick={(e) => addNewFolder("file")}>Add File</button>
      </div>
      {addFolder == "folder" && (
        <div className="name__container">
          <input
            type="text"
            name="name"
            value={fieldValues.name}
            onChange={(e) => handleValueChange(e, "folder")}
          />
          <button onClick={(e) => onSubmit(null)}>Submit</button>
        </div>
      )}
      {addFolder == "file" && (
        <div className="name__container">
          <input
            type="text"
            name="name"
            value={fieldValues.name}
            onChange={(e) => handleValueChange(e, "file")}
          />
          <button onClick={(e) => onSubmit(null)}>Submit</button>
        </div>
      )}
      {state.map((item, index) => (
        <NestedOption
          state={item}
          id={-1}
          addNewFolder={addNewFolder}
          handleValueChange={handleValueChange}
          onSubmit={onSubmit}
          addFolder={addFolder}
          fieldValues={fieldValues}
        />
      ))}
    </div>
  );
}
