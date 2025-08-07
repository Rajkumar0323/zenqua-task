import { Row, Col, Button } from "react-bootstrap";

export default function WelcomeBanner() {
  return (
    <div style={{ minHeight: "400px" }} className="py-5">
      <div className="container-fluid px-4">
        <Row className="align-items-center min-vh-50">
          <Col lg={6} className="pe-lg-5">
            <div className="mb-2">
              <small className="text-muted" style={{ fontSize: "13px" }}>
                Welcome!
              </small>
            </div>
            <h1
              className="mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "600",
                color: "#2d3748",
                lineHeight: "1.2",
              }}
            >
              Manage your <span style={{ color: "#1a73e8" }}>Deals</span>
            </h1>
            <Button
              style={{
                backgroundColor: "#1a73e8",
                border: "none",
                borderRadius: "6px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="shadow-sm"
            >
              Get Started
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <div className="position-relative d-none d-lg-block d-md-block">
              <img
                src="client-cover.png"
                alt="Welcome Banner"
                className="w-75"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
