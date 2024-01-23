import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CourseDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../../redux/cartSlice";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default function CourseDetails() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const course = useSelector((i) => {
    return i.courseDetails;
  });

  const navigate = useNavigate();
  const addToCartHandeler = () => {
    dispatch(addItem(course));
  };
  return (
    <div>
      <Link to="/">
        <button className="btn btn-warning " onClick={() => navigate(-1)}>
          Go Back
        </button>
      </Link>
      <div className="bookContainer">
        <img src={course.img} />
        <div className="bookInfo">
          <h1>{course.name}</h1>
          <h4>{course.instructor}</h4>
          <h4>Duration: {course.duration}</h4>
          <h4>Prerequisites: {course.prerequisites}</h4>
          <h4>Prerequisites: {course.prerequisites}</h4>
          <h4>syllabus: {course.schedule}</h4>

          <h4>enrollmentStatus : {course.enrollmentStatus}</h4>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            style={{ marginBottom: "5px" }}
          >
            Syllabus
          </Button>
          <br />
          <Collapse in={open}>
            <div id="example-collapse-text">
              {course.syllabus.map((a, b) => (
                <div key={b}>
                  <span>{b + 1}</span>
                  <span> {a}</span>
                </div>
              ))}
            </div>
          </Collapse>

          <button
            className="btn btn-primary"
            onClick={addToCartHandeler}
            disabled={course.enrollmentStatus == "closed" ? true : false}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
