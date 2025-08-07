import { MoreHorizontal } from "lucide-react";

export default function DealCard({ deal }) {
  return (
    <div
      className="row py-3 px-3 border-bottom align-items-center hover-bg-light"
      style={{ fontSize: "14px" }}
    >
      <div className="col-md-3">
        <div className="d-flex align-items-center">
          <div
            className="text-black rounded-circle me-3 d-flex align-items-center justify-content-center"
            style={{
              width: "32px",
              height: "32px",
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: "#deedff",
            }}
          >
            {deal.client.initials}
          </div>
          <div>
            <div className="fw-medium" style={{ color: "#2d3748" }}>
              {deal.client.name}
            </div>
            <small className="text-muted">{deal.client.company}</small>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div style={{ color: "#2d3748" }}>{deal.dealName}</div>
      </div>

      <div className="col-md-2">
        <div className="fw-medium" style={{ color: "#2d3748" }}>
          ${deal.budget.toLocaleString()}
        </div>
      </div>

      <div className="col-md-3">
        <div className="d-flex align-items-center">
          <div
            className="text-black rounded-circle me-2 d-flex align-items-center justify-content-center"
            style={{
              width: "20px",
              height: "20px",
              fontSize: "10px",
              backgroundColor: "#deedff",
            }}
          >
            {deal.assignee.initials}
          </div>
          <span className="text-muted" style={{ fontSize: "13px" }}>
            {deal.assignee.name}
          </span>
        </div>
      </div>

      <div className="col-md-1 text-end">
        <button className="btn btn-link text-muted p-0 border-0">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}
