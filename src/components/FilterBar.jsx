import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Search, Calendar, X } from "lucide-react";

export default function FilterBar({ filters, onFiltersChange }) {
  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      dealType: "My Deals",
      clientType: "All Clients",
      searchTerm: "",
      dateFrom: "",
      dateTo: "",
    });
  };

  return (
    <div className="mb-4">
      <Row className="mb-3">
        <Col xs={12} sm={12} md={3}>
          <div className="d-flex gap-4">
            <button
              className="btn  text-start d-flex align-items-center mt-4 justify-content-between w-25"
              style={{
                backgroundColor:
                  filters.dealType === "My Deals" ? "#e8f0fe" : "transparent",
                color: filters.dealType === "My Deals" ? "#1a73e8" : "#6c757d",
                border: "1px solid #dee2e6",
                borderRadius: "6px",
                fontSize: "14px",
                padding: "8px 12px",
              }}
            >
              {filters.dealType}
            </button>

            <button
              className="btn  text-start d-flex align-items-center mt-4 justify-content-between w-25"
              style={{
                backgroundColor: "transparent",
                color: "#6c757d",
                border: "1px solid #dee2e6",
                borderRadius: "6px",
                fontSize: "14px",
                padding: "8px 12px",
              }}
            >
              {filters.clientType}
            </button>
          </div>
        </Col>

        <Col
          xs={12}
          sm={4}
          md={6}
          className="mt-0 mt-sm-0 h-100 d-none d-lg-block d-md-block"
        >
          <div className="position-relative">
            <div
              className=" justify-content-start align-content-end mx-auto rounded-bottom-5"
              style={{
                height: "75px",
                backgroundColor: "#ebf7fdff",
              }}
            >
              <div
                className="background-lite-info text-white rounded-circle me-2 d-flex align-items-center justify-content-center m-2 border-primary border-4"
                style={{
                  width: "55px",
                  height: "55px",
                  fontSize: "23px",
                  fontWeight: "bold",
                  backgroundColor: "#cceeffff",
                  border: "1px solid #b3e0f7",
                }}
              >
                MS
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2} className="mt-4 text-end">
          <Button
            variant="link"
            className="text-danger text-decoration-none p-0"
            onClick={clearFilters}
            style={{ fontSize: "14px" }}
          >
            <X size={16} className="me-1" />
            Clear
          </Button>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col xs={12} md={3}>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex">
              <span
                className="btn btn-link text-decoration-none p-2 border-0"
                style={{
                  color: "#1a73e8",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                📊 Pipeline
              </span>
              <button
                className="btn btn-link text-decoration-none p-2 border-0"
                style={{ color: "#6c757d", fontSize: "14px" }}
              >
                📋 List
              </button>
            </div>
            <small className="text-muted">
              Total Deals: <strong>5</strong> Total Revenue in Pipeline:{" "}
              <strong>$65,817</strong>
            </small>
          </div>
        </Col>

        <Col xs={12} md={3}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search"
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
              style={{
                border: "1px solid #dee2e6",
                borderRadius: "6px 0 0 6px",
                fontSize: "14px",
              }}
            />
            <InputGroup.Text
              style={{
                backgroundColor: "white",
                border: "1px solid #dee2e6",
                borderLeft: "none",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <Search size={16} className="text-muted" />
            </InputGroup.Text>
          </InputGroup>
        </Col>

        <Col xs={6} md={2}>
          <Form.Control
            type="date"
            placeholder="From dd/mm/yyyy"
            value={filters.dateFrom}
            onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
        </Col>

        <Col xs={6} md={2}>
          <Form.Control
            type="date"
            placeholder="To dd/mm/yyyy"
            value={filters.dateTo}
            onChange={(e) => handleFilterChange("dateTo", e.target.value)}
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
        </Col>

        <Col xs={12} md={2} className="text-start">
          <span>📋 Active Deals</span>
        </Col>
      </Row>
    </div>
  );
}
