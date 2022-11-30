import { Container, Nav, Navbar } from "react-bootstrap";

export default function Cabecalho(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Features</Nav.Link>
                <Nav.Link href="#home">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}