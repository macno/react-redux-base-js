import React, { useRef } from 'react';
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
        icon: 'nc-icon nc-alien-33'
      };
      notificationAlertRef.current.notificationAlert(options);
      console.error(options.message)
    }
  }, [currentUser]);

  return (
    <>
      <span className="no-icon">{_user.name}</span>
      <Notify ref={notificationAlertRef} />
    </>
  );
};