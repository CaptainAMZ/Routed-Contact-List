import { Form, Datas } from "../src/index";
import { useParams } from "react-router-dom";
import { useContext } from "react";

const EditUser = ({ isEditing }) => {
  const { users } = useContext(Datas);
  const { id } = useParams();
  const mainUser = users[users.findIndex((item) => item.id == id)];
  return (
    <Form
      isEditing={isEditing}
      userId={mainUser.id}
      userName={mainUser.name}
      userMail={mainUser.mail}
    />
  );
};

export default EditUser;
