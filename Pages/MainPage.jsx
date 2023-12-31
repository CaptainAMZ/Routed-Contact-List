import { Rows, Button, Datas, Input } from "../src/index";
import { useContext } from "react";

const MainPage = () => {
  const { users, search, setSearch } = useContext(Datas);

  const searched = users.filter((user) => user.name.includes(search));

  return (
    <div className=" md:max-w-5xl w-[95%] md:w-10/12 h-full flex flex-col sm:p-10 justify-start items-center gap-2">
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
