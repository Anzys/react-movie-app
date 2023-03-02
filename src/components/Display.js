import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Display = () => {
  return (
    <div className="bg-secondary p-5 rounded shadow-lg">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">All</Button>
          <Button variant="warning">Satisfactory</Button>
          <Button variant="danger">Not-Satisfactory</Button>
        </ButtonGroup>
      </div>
      <div className="py-3">0 movies found</div>
      <hr />
      <Row>
        <Col>
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};

export default Display;
