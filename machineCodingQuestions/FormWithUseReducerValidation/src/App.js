import "./styles.css";
import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";
export default function App() {
  const [state, dispatch] = useReducer(formReducer, initialState); //always useReducer or useSelector gives access to reducer state
  const { values, errors, touched } = state;
  const validation = (values) => {
    let validationErrors = {};
    if (!values.name) {
      validationErrors["name"] = {
        required: "Name is required",
      };
    }
    return validationErrors;
  };
  const onFieldChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      name: e.target.name,
      value: e.target.value,
    });
  };
  const handleDispatch = () => {
    //if submitting then write the api integration
    const errors = validation(values);
    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "SET_ERROR",
        errors: errors,
      });
    }
    setTimeout(() => {
      dispatch({
        type: "RESET",
      });
    }, 1000);
  };
  return (
    <div className="App">
      <form>
        <div className="form__wrapper">
          <div className="form__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => onFieldChange(e)}
            />
            {errors?.name?.required && <div>{errors.name.required}</div>}
          </div>
          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => onFieldChange(e)}
            />
            {touched.name && errors.name && <div>{errors.email}</div>}
          </div>
          <div className="form__field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => onFieldChange(e)}
            />
            {touched.name && errors.name && <div>{errors.password}</div>}
          </div>
        </div>
        <div className="submit__button">
          <button type="submit" onClick={handleDispatch}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
