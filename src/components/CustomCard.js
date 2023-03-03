import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ searchedMovie, taskSwitcher, setDisplay }) => {
  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src={searchedMovie?.Poster} />
      <Card.Body>
        <Card.Title> Movie: {searchedMovie?.Title}</Card.Title>

        <Card.Text>Actors: {searchedMovie?.Actors}</Card.Text>
        <Card.Text>
          Rating:{searchedMovie?.Ratings && searchedMovie?.Ratings[0]?.Value}{" "}
          <br />
        </Card.Text>

        <div className="d-flex justify-content-between">
          <Button variant="warning">Satisfactory</Button>
          <Button variant="secondary">Not-Satisfactory</Button>
        </div>
        <div className="d-grid">
          <Button variant="danger mt-2">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
