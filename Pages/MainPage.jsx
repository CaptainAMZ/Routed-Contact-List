import Input from "../Components/Input";
import Rows from "../Components/Rows";
import Button from "../Components/Button";
import { useContext } from "react";
import Datas from "../Context/datas";

const MainPage = () => {
  const { users, search, setSearch } = useContext(Datas);

  const searched = users.filter((user) => user.name.includes(search));

  return (
    <div className="max-w-5xl w-full md:w-10/12 h-full flex flex-col p-10 justify-start items-center gap-2">
      <div className=" flex-col md:flex-row w-full mx-auto flex  justify-between items-center gap-2">
        <Button link={"add"} content="Add Person" bgColor="white" width="160" />
        <Input
          className="w-1/2"
          placeHolder="Search ..."
          needLabel={false}
          value={search}
          handler={setSearch}
        />
      </div>
      <div className="w-full mx-auto text-center">
        <Rows data={search ? searched : users} />
      </div>
    </div>
  );
};

export default MainPage;
