import { AppWrapper } from "@layouts/index";
import CapTable from "@pages/CapTable/CapTable";
import Dashboard from "@pages/Dashboard/Dashboard";
import { LandingPage } from "@pages/Landing/Landing";
import PortfolioView from "@pages/PortfolioView/PortfolioView";
import Reports from "@pages/Reports/Reports";
import AuthorizedShares from "@pages/Shares/AuthorizedShares";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

const withAppWrapper = (Component) => (
  <AppWrapper>
    <Component />
  </AppWrapper>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={withAppWrapper(Dashboard)} />
      <Route
        path="/authorized-shares"
        element={withAppWrapper(AuthorizedShares)}
      />
      <Route path="/cap-table" element={withAppWrapper(CapTable)} />
      <Route path="/portfolio-view" element={withAppWrapper(PortfolioView)} />
      <Route path="/reports" element={withAppWrapper(Reports)} />
    </Route>
  )
);
