import { lazy, Suspense, useEffect, useState } from "react";
import Datas from "../Context/datas";
import axios from "axios";
import Loader from "../Components/Loader";
import routes from "../routes";
// const routes = lazy(() => import("../routes"));

const URL_USERS = import.meta.env.VITE_API_URL_USERS;

function App() {
  
  const [users, setUsers] = useState(null);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get(`${URL_USERS}`)
      .then((res) => {
        setUsers(res.data);
        setError(false)
      })
      // .then(setLoading(false))
      .catch((res) => {
        res.statusText != "OK" && setError(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (users)
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
          {/* <Suspense fallback={<Loader />}>{routes}</Suspense> */}
        </Datas.Provider>
      </div>
    )
    else return <p>there is an error</p>;
}

export default App;
