import { useEffect, useState } from "react";
import { Datas, routes, supabase } from "./index";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const getData = async () => {
    let { data: People, error } = await supabase.from("People").select("*")
    if(error?.code.length) {
      setError(true)
    }else {
      setUsers(People);
      setError(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error && !users.length) return <p>Sorry,there is an error on the server side</p>;
  else
    return (
      <div className="max-w-[1200px] flex flex-col w-full justify-center items-center relative">
        <Datas.Provider
          value={{
            users,
            setUsers,
            name,
            setName,
            mail,
            setMail,
            search,
            setSearch,
            getData,
            setError,
          }}
        >
          {routes}
        </Datas.Provider>
      </div>
    );
}

export default App;
