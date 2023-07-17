import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import EditUser from "./Pages/EditUser";
import AddUser from "./Pages/AddUser";
import DetailPage from "./Pages/DetailPage";

 const routes = <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/edit/:id" element={<EditUser isEditing={true} />} />
    <Route path="/add" element={<AddUser isEditing={false} />} />
    <Route path="user/:id" element={<DetailPage />} />
    <Route path="*" element={<p>Page Not Found!</p>} />
  </Routes>
</BrowserRouter>;

export default routes
