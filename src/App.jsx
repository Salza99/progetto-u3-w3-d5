import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container fluid>
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
