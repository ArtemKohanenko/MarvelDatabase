import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Header from "./components/Header/Header"
import Layout from "./components/Layout/Layout";
import Characters from "./routes/Characters/Characters";
import Comics from "./routes/Comics/Comics";
import NoMatch from "./routes/NoMatch/NoMatch";

function App() {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          path: "/",
          element: <Navigate to="characters" />,
        },
        {
          path: "/characters",
          element: <Characters/>,
        },
        {
          path: "/comics",
          element: <Comics/>,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];


  let element = useRoutes(routes)

  return (
    <>
      {element}
    </>
  )
}

export default App
