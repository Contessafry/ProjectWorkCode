import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import PageDashboard from "./pages/PageDashBoard";
import PageCheckout from "./pages/PageCheckout";
import PageLogin from "./pages/PageLogin";
import PageHome from "./pages/PageHome";
import { AppContext } from "./Context";
import { useContext } from "react";

import Layout from "./components/Layout";
import PageProduct from "./pages/PageProduct";
import PageCheckoutSuccess from "./pages/PageCheckoutSuccess";

function DashLock({ isAuthenticated }: { isAuthenticated: boolean }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
function AppRouter() {
  const { userLogged } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="/products/:productId" element={<PageProduct />} />
          <Route element={<DashLock isAuthenticated={userLogged.isAdmin} />}>
            <Route path="/dashboard" element={<PageDashboard />} />
          </Route>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route path="/checkout/success" element={<PageCheckoutSuccess />} />
          <Route
            path="*"
            element={
              <div>
                Page not found{" "}
                <button onClick={() => window.history.go(-1)}>RETURN</button>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
