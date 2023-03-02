import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import Display from "./components/Display";
function App() {
  return (
    <div className="wrapper text-warning">
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5 text-center">My Movie Collection</h1>
          </Col>
        </Row>

        <hr />
        <SearchForm />
        <Display />
      </Container>
    </div>
  );
}

export default App;
