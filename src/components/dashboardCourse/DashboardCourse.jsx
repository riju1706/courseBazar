import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";

export default function DashboardCourse({ course }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: " 2rem",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {course.map((i) => (
          <Card style={{ width: "18rem" }} key={i.id}>
            <input
              type="checkbox"
              style={{ position: "absolute", right: 0 }}
              onChange={() => alert("completed")}
            />
            <Card.Img variant="top" src={i.img} width="550px" height="250px" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{i.name}</Card.Title>

              <p>Instructor name: {i.instructor}</p>
              <p>Due date : {i.schedule}</p>
              <ProgressBar now={10} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
