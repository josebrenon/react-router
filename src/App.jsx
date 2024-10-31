import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Navbar bg="dark" data-bs-theme="dark" className="nav">
        <Container>
          <Navbar.Brand href="/app">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contatos">Contatos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="conteudo">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
