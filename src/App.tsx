import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Header from "./components/Header/Header"
import Layout from "./components/Layout/Layout";
import Characters from "./routes/Characters/Characters";
import Comics from "./routes/Comics/Comics";
import NoMatch from "./routes/NoMatch/NoMatch";
import ComicDetail from "./routes/ComicDetail/ComicDetail";
import CharacterDetail from "./routes/CharacterDetail/CharacterDetail";

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
          children: [
            { index: true, element: <Characters/>},
            { path: '/characters/:id', element: <CharacterDetail/>}
          ]
        },
        {
          path: "/comics",
          children: [
            { index: true, element: <Comics/>},
            { path: '/comics/:id', element: <ComicDetail/>}
          ]
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
