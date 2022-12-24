import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  // const [isValid, setIsValid] = useState(false);

  const usernameChangeHandler = (event) => {
    // console.log(`Username: ${event.target.value}`);
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    // console.log(`Age: ${event.target.value}`);
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = { username, age };

    // console.log("Data:");
    // console.log(userData);
    props.onAddUser(userData);

    setUsername("");
    setAge("");
  };

  const formRender = (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        ></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          step="1"
          value={age}
          onChange={ageChangeHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );

  return <div>{formRender}</div>;
};

export default Form;
