import classes from "./Loader.module.scss";
import { Oval } from "react-loader-spinner";

interface LoaderProps {
  visible?: boolean
}

const Loader: React.FC<LoaderProps> = ({visible = false}) => {

  return (
    <div className={classes.container}>
      <Oval
        height={80}
        width={80}
        strokeWidth={8}
        color="#ed1a3b"
        secondaryColor="#e37a8a"
        ariaLabel="oval-loading"
        visible={visible}
      />
    </div>
  );
};

export default Loader;
