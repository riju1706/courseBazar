import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="carouselContainer">
        <img
          src="/img/113.png"
          alt="First slide"
          style={{ overflow: "hidden", objectFit: "cover" }}
          height="450px"
        />
        <div className="carouseltext">
          <h1>Top 10 courses</h1>
          <h1>To study in Germany</h1>
          <h2 className=" btn btn-primary bg-primary">Explore</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carouselContainer">
        <img
          src="/img/114.jpg"
          alt="First slide"
          style={{ overflow: "hidden", objectFit: "cover" }}
          height="450px"
        />
        <div className="carouseltext">
          <h1>Free machine learning courses</h1>
          <h1>2024</h1>
          <h2 className=" btn btn-primary bg-secondary">Explore</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carouselContainer">
        <img
          src="/img/00.png  "
          alt="First slide"
          style={{ overflow: "hidden", objectFit: "cover" }}
          height="450px"
        />
        <div className="carouseltext">
          <h2>The gown whispered its secrets</h2>
          <h2> to those who would take </h2>
          <h2>the time to listen.</h2>
          <h1> - The Gown</h1>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
