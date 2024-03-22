import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import PageProduct from "./pages/PageProduct";
import PageDashboard from "./pages/PageDashBoard";
import PageCheckout from "./pages/PageCheckout";
import PageLogin from "./pages/PageLogin";
import PageHome from "./pages/PageHome";
import { AppContext } from "./Context";
import { useContext } from "react";

function DashLock({ isAuthenticated }: { isAuthenticated: boolean }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
function AppRouter() {
  const { userLogged } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/products/:productId" element={<PageProduct />} />
        <Route element={<DashLock isAuthenticated={userLogged.isAdmin} />}>
          <Route path="/dashboard" element={<PageDashboard />} />
        </Route>
        <Route path="/login" element={<PageLogin />} />
        <Route path="/checkout" element={<PageCheckout />} />
        <Route
          path="*"
          element={
            <div>
              Page not found <button>RETURN</button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
