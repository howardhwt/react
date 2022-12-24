// import React, { useState } from "react";
import "./NewUser.css";
import Form from "./Form";
import AddToList from "./AddToList";

const NewUser = (props) => {
  let data;
  const addUserHandler = (userData) => {
    data = {
      ...userData,
      id: Math.random().toString(),
    };
    props.onAddUserData(data);
  };

  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <NewUser onAddToList={addToListHandler} />
    </div>
  );
};

export default NewUser;
