import { NotificationPayload } from "firebase/messaging";
import classes from "./Message.module.scss";

const Message = (props: { notification?: NotificationPayload }) => {
  const notification = props.notification;

  return (
    <>
      <div className={classes.notificationHeader}>
        {notification?.image && (
          <div className={classes.imageContainer}>
            <img src={notification.image} width={100} />
          </div>
        )}
        <span>{notification?.title}</span>
      </div>
      <div className={classes.notificationBody}>{notification?.body}</div>
    </>
  );
};

export default Message;
