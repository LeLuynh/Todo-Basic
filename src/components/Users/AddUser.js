import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandle = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age > 0",
      });
      return;
    }
    console.log(props);
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };
  const usernameChangeHandle = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandle = (e) => {
    setAge(e.target.value);
  };
  const errorHandle = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={usernameChangeHandle}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandle}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
