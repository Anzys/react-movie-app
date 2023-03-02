import React, { useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import CustomCard from "./CustomCard";
import { fetchMovies } from "../helper/fetchHelper";

const SearchForm = () => {
  const strRef = useRef("");
  const [error, setError] = useState(false);

  const [searchedMovie, setSearchedMovie] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // error && setError(false);
    const str = strRef.current.value;
    const data = await fetchMovies(str);
    if (data.Response === "True") {
      setSearchedMovie(data);
    } else {
      setError(true);
    }
  };
  return (
    <div className="bg-danger p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row className="gap-1">
          <Col md="9">
            <Form.Control ref={strRef} placeholder="Search By Title " />
          </Col>
          <Col>
            <div className="d-grid">
              <Button type="submit" variant="warning">
                Search Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className=" d-flex  mt-5 justify-content-center text-center">
        {error ? (
          <Alert variant="danger">Movie not found</Alert>
        ) : (
          <CustomCard searchedMovie={searchedMovie} />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
