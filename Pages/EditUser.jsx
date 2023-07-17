import React from "react";
import Form from "../Components/Form";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Datas from "../Context/datas";

const EditUser = ({ isEditing }) => {
  const { users } = useContext(Datas);
  const { id } = useParams();
  const mainUser = users[users.findIndex((item) => item.id == id)];
  return <Form isEditing={isEditing} userId={mainUser.id} userName = {mainUser.name} userMail={mainUser.gmail} />; 
};

export default EditUser;
