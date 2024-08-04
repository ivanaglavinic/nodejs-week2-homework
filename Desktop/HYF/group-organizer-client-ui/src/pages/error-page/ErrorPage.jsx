import { useRouteError } from "react-router"
import "./errorPage.css"
import { NavBar } from "../../components/nav-bar/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
  <div className="error-page">
    <NavBar />
    <h2>Something went wrong</h2>
    <p>{error.statusCode || 500}</p>
    <p>{error.message || "An unknown error occurred"}</p>
  </div>
);
};