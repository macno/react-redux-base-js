import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { saveUser, selectUser } from '../features/user/userSlice';
import moment from 'moment'
import User from '../model/User'
import Notify from 'react-notification-alert';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function UserProfile() {

  const dispatch = useDispatch();
  const _user = useSelector(selectUser);
  const __user = new User(_user.data)
  const notificationAlertRef = React.useRef(null);

  const handleInputChange = (e) => {

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    __user[name] = value;

  }

  // React to new status with alerts
  console.log('UserProfile rendering, status: ' + _user.status)
  switch(_user.status) {
    case "saved-ok":
        var options = {
          place: 'tc',
          message: "Profile saved",
          type: 'success',
          autoDismiss: 3,
          icon: 'nc-icon nc-satisfied'
        };
        notificationAlertRef.current.notificationAlert(options);
        break;
  }

  const submitUser = (e, user) => {
    e.preventDefault();
    dispatch(saveUser(user));
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={(e) => submitUser(e, __user)}>
                  <Row>
                    <Col className="pr-1" md="2">
                      <Form.Group>
                        <label>Id</label>
                        <Form.Control
                          defaultValue={__user.id}
                          disabled
                          placeholder="Id"
                          type="text"
                        >
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue={__user.username}
                          onChange={e => handleInputChange(e)}
                          placeholder="Username"
                          type="text"
                          name="username"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="7">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                                        </label>
                        <Form.Control
                          defaultValue={__user.email}
                          onChange={e => handleInputChange(e)}
                          placeholder="Email"
                          type="email"
                          name="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={__user.first_name}
                          onChange={e => handleInputChange(e)}
                          placeholder="Company"
                          type="text"
                          name="first_name"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={__user.last_name}
                          onChange={e => handleInputChange(e)}
                          placeholder="Last Name"
                          type="text"
                          name="last_name"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Last login</label>
                        <Form.Control
                          defaultValue={moment(__user.last_login).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                          disabled
                          placeholder="Last login"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <Form.Check className="mb-1 pl-0">
                          <Form.Check.Label>
                            <Form.Check.Input
                              defaultChecked={__user.is_active}
                              onChange={e => handleInputChange(e)}
                              type="checkbox"
                              name="is_active"
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                                            Active
                                        </Form.Check.Label>
                        </Form.Check>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <Form.Check className="mb-1 pl-0">
                          <Form.Check.Label>
                            <Form.Check.Input
                              defaultChecked={__user.is_staff}
                              onChange={e => handleInputChange(e)}
                              type="checkbox"
                              name="is_staff"
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                                            Staff
                                        </Form.Check.Label>
                        </Form.Check>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <Form.Check className="mb-1 pl-0">
                          <Form.Check.Label>
                            <Form.Check.Input
                              defaultChecked={__user.is_superuser}
                              onChange={e => handleInputChange(e)}
                              type="checkbox"
                              name="is_superuser"
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                                            Admin
                                        </Form.Check.Label>
                        </Form.Check>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                            </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/sanmartino.jpg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/placeholder_user.png").default}
                    ></img>
                    <h5 className="title">{__user.name}</h5>
                  </a>
                  <p className="description">{__user.username}</p>
                </div>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Notify ref={notificationAlertRef} />
    </>
  );
}

export default UserProfile;
