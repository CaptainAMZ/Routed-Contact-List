import { Button, Datas, supabase } from "../src/index";
import { useContext } from "react";

const Row = ({
  id = "empty",
  idx = "empty",
  name = "empty",
  mail = "empty",
}) => {
  const { getData, setError } = useContext(Datas);

  const deleteHandler = async () => {
    const { error } = await supabase.from("People").delete().eq("id", id);
    if (error) setError(true);
    else {
      await getData();
      setError(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-between bg-white p-3 rounded-lg text-left lg:flex-row gap-3">
      <div className="flex flex-1 gap-3 items-center">
        <p className="p-3">{idx + 1} </p>
        <p className="flex-[3] break-all">{name}</p>
        <p className="flex-[7] break-all">{mail}</p>
      </div>
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
