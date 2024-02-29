import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err)
  return(
    <div className="error">
      <h1>Oops! something went wrong</h1>
      <h2>{err.status}: {err.statusText}</h2>
      <p>Pleas check your internet connection and come back to log
        in again
      </p>

    </div>
  )
}
export default Error;