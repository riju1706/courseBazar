import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addItem, courseDetailsAction } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./card.css";

function Cards({ i }) {
  // Hook =======================================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addCart, setAddCart] = useState(false);

  // Handeler ========================================
  const bookDetailsHandeler = () => {
    dispatch(courseDetailsAction(i));
    navigate("/CourseDetails");
  };

  const addToCartHandeler = () => {
    setAddCart(true);
    dispatch(addItem(i));
    setTimeout(() => {
      setAddCart(false);
    }, 2000);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={i.img ? i.img : "img/no-preview.png"}
        width="550px"
        height="250px"
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>
          <b>{i.description}</b>
        </Card.Text>
        <p>{i.instructor}</p>
        <p>Enrollment Status : {i.enrollmentStatus}</p>
        <a className="moreDetails" onClick={bookDetailsHandeler}>
          more details...
        </a>

        <Button
          variant="primary"
          className="w-100 cardButton"
          onClick={() => {
            addToCartHandeler();
          }}
          disabled={i.enrollmentStatus == "closed" ? true : false}
        >
          Add to cart {addCart && <box-icon name="check-circle"></box-icon>}
          {/* {addCart && "added"} */}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
