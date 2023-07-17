import { useContext } from "react";
import { useParams } from "react-router-dom";
import Datas from "../Context/datas";
import Button from "../Components/Button";

const DetailPage = () => {
  const { id } = useParams();
  const { users } = useContext(Datas);
  const mainUser = users[users.findIndex((item) => item.id == id)];

  if (mainUser)
    return (
      <div className="w-[60%] shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-10 rounded-xl flex justify-center items-center flex-col gap-8 text-center text-white">
        <p className="w-5/6 py-3 bg-[#8585d1] rounded">
          Name : {mainUser.name}
        </p>
        <p className="w-5/6 py-3 bg-[#e76767] rounded">
          Gmail : {mainUser.gmail}
        </p>
        <Button link="/" action={null} content="Back" />
      </div>
    );
  else return <p> There's an error </p>;
};

export default DetailPage;