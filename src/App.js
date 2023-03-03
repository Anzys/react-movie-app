import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [display, setDisplay] = useState({ type: "All" });
  const taskSwitcher = (id, type) => {
    const temArg = display.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setDisplay(temArg);
  };
  return (
    <div className="wrapper text-warning">
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5 text-center">My Movie Collection</h1>
          </Col>
        </Row>

        <hr />
        <SearchForm display={display} />
        <Display setDisplay={setDisplay} taskSwitcher={taskSwitcher} />
      </Container>
    </div>
  );
}

export default App;
