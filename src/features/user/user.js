import React, { useRef } from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Notify from 'react-notification-alert';
import User from '../../model/User'

export function UserComponent() {

  const currentUser = useSelector(selectUser);
  const notificationAlertRef = React.useRef(null);
  const _user = new User(currentUser.data)

  React.useEffect(() => {

    if (currentUser.lastError.length > 0) {
      var options = {
        place: 'tc',
        message: currentUser.lastError,
        type: 'danger',
        autoDismiss: 5,
        icon: null
      };
      notificationAlertRef.current.notificationAlert(options);
      console.error(options.message)
    }
  }, [currentUser]);

  return (
    <>
      <NavLink
        className="m-0"
        to={"/user"}
      ><span className="no-icon">{_user.name}</span>
      </NavLink>
      <Notify ref={notificationAlertRef} />
    </>
  );
};