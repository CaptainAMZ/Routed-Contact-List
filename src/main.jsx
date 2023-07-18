import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { Suspense, lazy } from "react";
import Loader from "../Components/Loader";
const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);
