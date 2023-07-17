import { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import { useContext } from "react";
import Datas from "../Context/datas";
import { useNavigate } from "react-router-dom";

const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const Form = ({ isEditing, userId, userName, userMail }) => {
  const { URL_USERS, name, setName, mail, setMail, getData } =
    useContext(Datas);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      setMail(userMail);
      setName(userName);
    } else {
      setMail("");
      setName("");
    }
  }, []);

  const actionHandler = () => {
    if (name && mail.match(mailReg))
      if (isEditing) editHandler();
      else addHandler();
    else alert("enter the infos correctly");
  };

  const editHandler = () => {
    const updatedUser = { id: userId, name: name.trim(), gmail: mail.trim() };
    axios
      .put(`${URL_USERS}/${userId}`, updatedUser)
      .then(navigate("/"))
      .then(getData);
  };

  const addHandler = () => {
    const newUser = { id: userId, name: name.trim(), gmail: mail.trim() };
    axios.post(`${URL_USERS}`, newUser).then(navigate("/")).then(getData);
  };

  return (
    <div className="w-[60%] shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-10 rounded-xl flex justify-center items-center flex-col gap-4">
      <h2 className=" text-4xl mb-4">{isEditing ? "EDIT" : "ADD"}</h2>
      <Input
        label="Name"
        placeHolder="Enter Your Name"
        value={name}
        handler={setName}
      />
      <Input
        label="Gmail"
        placeHolder="Enter Your Email"
        value={mail}
        handler={setMail}
      />
      <div className="w-full flex justify-center gap-4">
        <Button link={null} action={actionHandler} content="Done" />
        {!isEditing && <Button link="/" action={null} content="Back" />}
      </div>
    </div>
  );
};

export default Form;
