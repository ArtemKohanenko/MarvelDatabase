import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
