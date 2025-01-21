import { useEffect, useState } from "react";
import "./styles.css";

const SelectedUserChip = ({ firstName, lastName, image }) => {
  return (
    <div>
      <span>
        {firstName} {lastName}
      </span>
    </div>
  );
};
export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [value, setValue] = useState("");
  const [selectedUsersAfterSearch, setSelectedUsersAfterSearch] = useState([]);
  const setTheSearchResults = (search) => {
    console.log(search);
    setValue(search);
    if (search !== "") {
      setSelectedUsers(
        users.filter((user) => user.firstName.indexOf(search) != -1)
      );
    } else {
      setSelectedUsers([]);
    }
    console.log(selectedUsers);
  };

  const pushSelectedUser = (data) => {
    console.log(data);
    setSelectedUsersAfterSearch((prev) => [...prev, data]);
    setValue("");
  };

  useEffect(() => {
    async function getResult() {
      const res = await fetch(`https://dummyjson.com/users/search?q=${value}`);
      const data = await res.json();
      setUsers(data.users);
    }
    getResult();
  }, [value]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="search__container">
          <div className="searchedResults">
            <span>
              {selectedUsersAfterSearch &&
                selectedUsersAfterSearch.map((data, id) => (
                  <SelectedUserChip
                    firstName={data.firstName}
                    lastName={data.lastName}
                    image={data.image}
                    key={id}
                  />
                ))}
            </span>

            <input
              type="text"
              onChange={(e) => setTheSearchResults(e.target.value)}
            />
          </div>
          {selectedUsers &&
            selectedUsers.map((data, id) => (
              <div
                className="search__results"
                key={data.id}
                onClick={() => pushSelectedUser(data)}
              >
                <span>
                  <img src={data.image} />
                </span>
                <span>
                  {data.firstName} {data.lastName}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
