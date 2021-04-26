import React, { useState } from 'react';
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser
} from './userSlice';

export function User() {

  const currentUser = useSelector(selectUser);

  return (
    <div>
      <Nav.Item>
        <Nav.Link
          className="m-0"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <span className="no-icon">{currentUser.first_name + ' ' + currentUser.last_name}</span>
        </Nav.Link>
      </Nav.Item>
    </div>
  );
};