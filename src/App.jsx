import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import { userData } from "./data/userData";

const App = () => {
  return (
    <div className="container main-content bg-white px-sm-5 px-2 py-3 mx-md-0 mx-2">
      <UserList users={userData} />
    </div>
  );
};

export default App;
