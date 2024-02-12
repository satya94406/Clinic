import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = error ? (error.statusText || error.message) : "Unknown error";
  return (
    <div >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}