import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import WelcomeBanner from "../components/WelcomeBanner";
import DealsTable from "../components/DealsTable";

export default function CRMDashboard() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", width: "100%" }}>
      <Header />
      <Container
        fluid
        className=""
        style={{
          backgroundImage: "linear-gradient(360deg, #d7e7ff, transparent)",
        }}
      >
        <WelcomeBanner />
        <DealsTable />
      </Container>
    </div>
  );
}
