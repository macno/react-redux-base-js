import React, { useRef } from 'react';
import { Nav } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Notify from 'react-notification-alert';

export function User() {

  const currentUser = useSelector(selectUser);
  const notificationAlertRef = React.useRef(null);

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
          <span className="no-icon">{currentUser.data.first_name} {currentUser.data.last_name}</span>
        </Nav.Link>
      </Nav.Item>
      <Notify ref={notificationAlertRef} />
    </div>
  );
};