export const NestedOption = ({
  state,
  id,
  addNewFolder,
  handleValueChange,
  onSubmit,
  addFolder,
  fieldValues,
}) => {
  return (
    <div className="nestedOption">
      <div className="name__container">
        <div className="view">
          <p>{state.name}</p>
          {state.type == "folder" && (
            <div className="button__wrapper">
              <button onClick={(e) => addNewFolder("folder")}>
                Add Folder
              </button>
              <button onClick={(e) => addNewFolder("file")}>Add File</button>
              {addFolder == "folder" && (
                <div className="name__container">
                  <input
                    type="text"
                    name="name"
                    value={fieldValues.name}
                    onChange={(e) => handleValueChange(e, "folder")}
                  />
                  <button onClick={(e) => onSubmit(state)}>Submit</button>
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
                  <button onClick={onSubmit}>Submit</button>
                </div>
              )}
            </div>
          )}
          <div className="subMenu">
            {state?.subMenu?.map((subMenu) => (
              <NestedOption
                state={subMenu}
                id={state.id}
                addNewFolder={addNewFolder}
                handleValueChange={handleValueChange}
                onSubmit={onSubmit}
                addFolder={addFolder}
                fieldValues={fieldValues}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
