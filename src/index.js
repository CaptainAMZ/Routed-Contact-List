import { createClient } from "@supabase/supabase-js";


import MainPage from "../Pages/MainPage";
import EditUser from "../Pages/EditUser";
import AddUser from "../Pages/AddUser";
import NotFound from "../Pages/NotFound"
import DetailPage from "../Pages/DetailPage";
import Form from "../Components/Form";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Loader from "../Components/Loader";
import Row from "../Components/Row";
import Rows from "../Components/Rows";
import Datas from "../Context/datas";
import routes from "../routes";


const url = import.meta.env.VITE_URL;
const APIYKey = import.meta.env.VITE_API_KEY;

const supabase = createClient(url, APIYKey);

export {
    MainPage,
    EditUser,
    AddUser,
    NotFound,
    DetailPage,
    Form,
    Button,
    Input,
    Loader,
    Row,
    Rows,
    Datas,
    routes,
    supabase
}