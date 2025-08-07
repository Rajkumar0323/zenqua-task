import { useState, useMemo } from "react";
import { Card, Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import FilterBar from "./FilterBar";
import DealCard from "./DealCard";
import { dealsData } from "../data/dealsData";

export default function DealsTable() {
  const [filters, setFilters] = useState({
    dealType: "My Deals",
    clientType: "All Clients",
    searchTerm: "",
    dateFrom: "",
    dateTo: "",
  });

  const [expandedSections, setExpandedSections] = useState({
    Negotiating: true,
    Kickedback: true,
  });

  const filteredDeals = useMemo(() => {
    return dealsData.filter((deal) => {
      const matchesSearch =
        deal.dealName
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        deal.client.name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      const matchesDateRange =
        !filters.dateFrom ||
        !filters.dateTo ||
        (new Date(deal.createdAt) >= new Date(filters.dateFrom) &&
          new Date(deal.createdAt) <= new Date(filters.dateTo));

      return matchesSearch && matchesDateRange;
    });
  }, [filters]);

  const groupedDeals = useMemo(() => {
    return filteredDeals.reduce((acc, deal) => {
      if (!acc[deal.status]) {
        acc[deal.status] = [];
      }
      acc[deal.status].push(deal);
      return acc;
    }, {});
  }, [filteredDeals]);

  const totalDeals = filteredDeals.length;
  const totalRevenue = filteredDeals.reduce(
    (sum, deal) => sum + deal.budget,
    0
  );

  const toggleSection = (status) => {
    setExpandedSections((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };
  const getInitialsColor = (status) => {
    const colors = ["#f4f4f4", "#d9ffe3ff", "#fff7e0", "#fff4f3", "#bdc2c7ff"];
    const index = status.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="container-fluid px-4 py-4">
      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-4 pt-0">
          <FilterBar filters={filters} onFiltersChange={setFilters} />

          <div className="deals-pipeline">
            {Object.entries(groupedDeals).map(([status, deals]) => (
              <div key={status} className="mb-3">
                <div
                  className="d-flex align-items-center py-2 px-3 mb-0 rounded cursor-pointer"
                  onClick={() => toggleSection(status)}
                  style={{ cursor: "pointer" }}
                >
                  {expandedSections[status] ? (
                    <ChevronUp size={16} className="me-2 text-muted" />
                  ) : (
                    <ChevronDown size={16} className="me-2 text-muted" />
                  )}
                  <div
                    className="d-flex align-items-center py-2 px-3 rounded cursor-pointer w-100"
                    style={{ backgroundColor: getInitialsColor(status) }}
                  >
                    <h6
                      className="mb-0 me-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      {status}
                    </h6>
                    <span
                      className="badge bg-white text-dark me-2 rounded-5 "
                      style={{ fontSize: "11px" }}
                    >
                      {deals.length}
                    </span>
                    <small className=" badge bg-white text-dark rounded-5 ">
                      $
                      {deals
                        .reduce((sum, deal) => sum + deal.budget, 0)
                        .toLocaleString()}
                    </small>
                  </div>
                </div>

                <Collapse in={expandedSections[status]}>
                  <div>
                    {expandedSections[status] && (
                      <div className="mt-0 ms-5 me-4">
                        <div
                          className="row py-2 px-3 bg-white border-bottom"
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#6c757d",
                          }}
                        >
                          <div className="col-md-3">Client</div>
                          <div className="col-md-3">Deal Name</div>
                          <div className="col-md-2">Deal budget</div>
                          <div className="col-md-3">Assignee</div>
                          <div className="col-md-1"></div>
                        </div>

                        {deals.map((deal) => (
                          <DealCard key={deal.id} deal={deal} />
                        ))}
                      </div>
                    )}
                  </div>
                </Collapse>
              </div>
            ))}
          </div>

          <div className="mt-4 text-muted">
            <small>
              Total Deals: <strong>{totalDeals}</strong> | Total Revenue in
              Pipeline: <strong>${totalRevenue.toLocaleString()}</strong>
            </small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
