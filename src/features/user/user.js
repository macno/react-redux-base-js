import React, { useRef } from 'react';
import { Nav } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Notify from 'react-notification-alert';
import User from '../../model/User'

export function UserComponent() {

  const currentUser = useSelector(selectUser);
  const notificationAlertRef = React.useRef(null);
  const _user = new User(currentUser.data.id, 
        currentUser.data.first_name, 
        currentUser.data.last_name, 
        currentUser.data.username, 
        currentUser.data.email, 
        currentUser.data.last_login, 
        currentUser.data.is_staff,
        currentUser.data.is_active,
        currentUser.data.is_superuser)

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
    <div>
      <Nav.Item>
        <Nav.Link
          className="m-0"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <span className="no-icon">{_user.name}</span>
        </Nav.Link>
      </Nav.Item>
      <Notify ref={notificationAlertRef} />
    </div>
  );
};