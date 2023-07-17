import { useEffect, useState } from "react";
import Datas from "../Context/datas";
import axios from "axios";
import Loader from "../Components/Loader";
import routes from "../routes";

const URL_USERS = import.meta.env.VITE_API_URL_USERS

function App() {
  const [users, setUsers] = useState(null);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [isLoading , setIsLoading] = useState(true)

  const getData = () => {
    axios
      .get(`${URL_USERS}`)
      .then((res) => {setUsers(res.data) 
        setIsLoading(false)
      })
      .catch((res) => res.statusText != "OK" && setError(true));
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) return <p>there is an error</p>;
  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-col w-full justify-center items-center relative">
      <Datas.Provider
        value={{
          URL_USERS,
          users,
          setUsers,
          name,
          setName,
          mail,
          setMail,
          search,
          setSearch,
          getData,
        }}
      >
        {routes}
      </Datas.Provider>
    </div>
  );
}

export default App;
