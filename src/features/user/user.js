import React, { useState } from 'react';
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser
} from './userSlice';

export function User() {

  const currentUser = useSelector(selectUser);

  if (!currentUser.authorized)
    window.location.assign('/accounts/login/')

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
    </div>
  );
};