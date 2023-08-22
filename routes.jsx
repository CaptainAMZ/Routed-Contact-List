import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage, EditUser, AddUser, NotFound, DetailPage } from "./src/index";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/edit/:id" element={<EditUser isEditing={true} />} />
      <Route path="/add" element={<AddUser isEditing={false} />} />
      <Route path="user/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
