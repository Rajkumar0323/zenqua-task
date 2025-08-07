import { useState } from "react";
import { Navbar, Nav, Dropdown, Container, Offcanvas } from "react-bootstrap";
import { ChevronDown, Menu, X, Bell } from "lucide-react";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="border-bottom px-3 py-2"
        style={{ minHeight: "60px" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="fw-bold d-flex align-items-center me-4"
          >
            <div
              className=" text-primary rounded me-2 d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px", fontSize: "40px" }}
            >
              #
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted" style={{ fontSize: "16px" }}>
                ROSTER
              </span>
              <span style={{ color: "#1a73e8", fontSize: "16px" }}>GRID</span>
            </div>
          </Navbar.Brand>

          <Nav className="m-auto d-none d-lg-flex bg-light rounded-5 px-2 py-2 ">
            <Nav.Link
              href="#"
              className="text-muted px-3 fw-medium"
              style={{ fontSize: "14px" }}
            >
              Dashboard
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-muted text-decoration-none border-0 bg-transparent px-3 fw-medium"
                style={{ fontSize: "14px" }}
              >
                Roster
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Team Members</Dropdown.Item>
                <Dropdown.Item>Departments</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-muted text-decoration-none border-0 bg-transparent px-3 fw-medium"
                style={{ fontSize: "14px" }}
              >
                Communications
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Messages</Dropdown.Item>
                <Dropdown.Item>Notifications</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link
              href="#"
              className="px-3 bg-primary text-white fw-semibold"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "20px",
                margin: "0 4px",
              }}
            >
              CRM
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-muted text-decoration-none border-0 bg-transparent px-3 fw-medium"
                style={{ fontSize: "14px" }}
              >
                Contracts
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Active Contracts</Dropdown.Item>
                <Dropdown.Item>Templates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-muted text-decoration-none border-0 bg-transparent px-3 fw-medium"
                style={{ fontSize: "14px" }}
              >
                Settings
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Account Settings</Dropdown.Item>
                <Dropdown.Item>Preferences</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-muted text-decoration-none border-0 bg-transparent px-3 fw-medium"
                style={{ fontSize: "14px" }}
              >
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Reports</Dropdown.Item>
                <Dropdown.Item>Analytics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <div className="d-none d-lg-flex align-items-center">
            <Bell size={18} className="text-muted me-3" />
            <div className="d-flex align-items-center">
              <div
                className="bg-danger text-white rounded-circle me-2 d-flex align-items-center justify-content-center"
                style={{
                  width: "28px",
                  height: "28px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                M
              </div>
              <span
                className="text-dark fw-medium"
                style={{ fontSize: "14px" }}
              >
                Michael
              </span>
            </div>
          </div>

          <button
            className="btn btn-link d-lg-none p-0 border-0"
            onClick={handleShow}
            style={{ fontSize: "24px" }}
          >
            <Menu size={24} className="text-muted" />
          </button>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        className="w-75"
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title className="d-flex align-items-center">
            <div
              className="bg-primary text-white rounded me-2 d-flex align-items-center justify-content-center"
              style={{ width: "20px", height: "20px", fontSize: "10px" }}
            >
              ✱
            </div>
            <span style={{ color: "#1a73e8" }}>ROSTER</span>
            <span className="text-muted ms-1">CRM</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-muted py-3 border-bottom">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#" className="text-muted py-3 border-bottom">
              Roster
            </Nav.Link>
            <Nav.Link href="#" className="text-muted py-3 border-bottom">
              Communications
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-primary py-3 border-bottom fw-semibold"
            >
              CRM
            </Nav.Link>
            <Nav.Link href="#" className="text-muted py-3 border-bottom">
              Contracts
            </Nav.Link>
            <Nav.Link href="#" className="text-muted py-3 border-bottom">
              Settings
            </Nav.Link>
            <Nav.Link href="#" className="text-muted py-3 border-bottom">
              More
            </Nav.Link>
          </Nav>

          <div className="mt-4 pt-4 border-top">
            <div className="d-flex align-items-center">
              <div
                className="bg-danger text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px", fontSize: "14px" }}
              >
                M
              </div>
              <span className="text-dark fw-medium">Michael</span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
