import { useEffect } from "react";
import { Input, Button, Datas, supabase } from "../src/index";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const Form = ({ isEditing, userId, userName, userMail }) => {
  const { name, setName, mail, setMail, getData, setError } = useContext(Datas);
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

  const editHandler = async () => {
    const updatedUser = { id: userId, name: name.trim(), mail: mail.trim() };
    const { error } = await supabase
      .from("People")
      .update({ ...updatedUser })
      .eq("id", userId);
    if (error) setError(true);
    else {
      navigate("/");
      await getData();
      setError(false);
    }
  };

  const addHandler = async () => {
    const newUser = {
      name: name.trim(),
      mail: mail.trim(),
    };

    const { error } = await supabase.from("People").insert([{ ...newUser }]);

    if (error) setError(true);
    else {
      navigate("/");
      await getData();
      setError(false);
    }
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
