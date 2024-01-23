import "./navbarComp.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchAddItem } from "../../redux/cartSlice";
import { authorTitleAction } from "../../redux/cartSlice";
import "boxicons";

function NavbarComp() {
  // useState =====================================

  const [search, setSearch] = useState(false);

  const [searchBook, setSearchBook] = useState("");

  // ====================================================

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux =========================================================

  const cartItem = useSelector((i) => {
    return i.cart;
  });
  const user = useSelector((i) => {
    return i.user;
  });

  // for logout ================================================
  const logoutHandeler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // hadeler =========================================

  const myOrderHandeler = () => {
    user.uid ? navigate("/dashboard") : navigate("/login");
  };
  // return=========================================================
  return (
    <>
      <Navbar expand="lg" className="bg-info ">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img className="logoImg" src="./img/logo.png" width="180px" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            <Form className="d-flex navForm">
              <div>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    dispatch(searchAddItem(e.target.value));
                  }}
                />
                <div className="searchList"></div>
              </div>
              <Link to="/">
                <Button
                  variant="outline-success bg-warning"
                  style={{ color: "#000" }}
                >
                  Home
                </Button>
              </Link>
            </Form>
            <Link to="./payment" className="cart" className="navlink">
              <box-icon name="cart-alt"></box-icon>

              <p className="cartNum">{cartItem.length}</p>
            </Link>

            {user.name ? (
              <NavDropdown
                title={user.name}
                id="navbarScrollingDropdown"
                style={{ marginRight: "120px" }}
                className="navbutton btn btn-warning"
              >
                <NavDropdown.Item>
                  <Button
                    variant="outline-success bg-warning"
                    style={{ color: "#000" }}
                    onClick={logoutHandeler}
                  >
                    Logout
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />>
                <NavDropdown.Item onClick={myOrderHandeler}>
                  My Dashboard
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login" className="navbutton">
                <button className="btn btn-warning">Login</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
