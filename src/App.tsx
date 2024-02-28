import { RouteObject, useRoutes } from "react-router-dom";
import Header from "./components/Header/Header"
import Layout from "./components/Layout/Layout";

function App() {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout/>,
      children: [
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
