import { NavBarDashboard } from "../../components/navBar/navBarDashboard";
import "../Dashboard/style.css";

export const DashboardPage = () => {
  return (
    <>
      <div className="nav">
        <NavBarDashboard />
      </div>
      <main></main>
    </>
  );
};
