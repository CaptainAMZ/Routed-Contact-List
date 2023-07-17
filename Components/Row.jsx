import React from "react";
import Button from "./Button";
import axios from "axios";
import Datas from "../Context/datas";
import { useContext } from "react";

const Row = ({ id = "empty", name = "empty", gmail = "empty" }) => {
  const { URL_USERS, getData } = useContext(Datas);

  const deleteHandler = () => {
    axios.delete(`${URL_USERS}/${id}`).then(getData);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white p-3 rounded-lg text-left md:flex-row">
      <p className="flex-1">{id} </p>
      <p className="flex-1">{name}</p>
      <p className="flex-[3]">{gmail}</p>
      <div className="flex gap-2">
        <Button
          link={`/edit/${id}`}
          content="Edit"
          bgColor="#8585D1"
          color="white"
        />
        <Button
          link={`/user/${id}`}
          content="View"
          bgColor="#8585D1"
          color="white"
        />
        <Button
          action={deleteHandler}
          content="Delete"
          bgColor="#E76767"
          color="white"
          link={null}
        />
      </div>
    </div>
  );
};

export default Row;
