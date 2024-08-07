import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Characters from "./routes/Characters/Characters";
import Comics from "./routes/Comics/Comics";
import NoMatch from "./routes/NoMatch/NoMatch";
import ComicDetail from "./routes/ComicDetail/ComicDetail";
import CharacterDetail from "./routes/CharacterDetail/CharacterDetail";
import Message from "./components/Message/Message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Favourites from "./routes/Favourites/Favourites";
import { getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "./firebase/firebaseConfig";

const { VITE_APP_VAPID_KEY } = import.meta.env;

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: VITE_APP_VAPID_KEY,
      });

      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
    onMessage(messaging, (payload) => {
      console.log("incoming msg");
      toast(<Message notification={payload.notification} />);
    });
  }, []);

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Navigate to="characters" />,
        },
        {
          path: "/characters",
          children: [
            { index: true, element: <Characters /> },
            { path: "/characters/:id", element: <CharacterDetail /> },
          ],
        },
        {
          path: "/comics",
          children: [
            { index: true, element: <Comics /> },
            { path: "/comics/:id", element: <ComicDetail /> },
          ],
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <>
      <ToastContainer />
      {element}
    </>
  );
}

export default App;
