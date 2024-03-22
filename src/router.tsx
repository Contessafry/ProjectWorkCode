import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageProduct from "./pages/pageProduct";
import PageDashboard from "./pages/PageDashBoard";
import PageCheckout from "./pages/PageCheckout";
import PageLogin from "./pages/PageLogin";
import PageHome from "./pages/PageHome";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/products/:productId" element={<PageProduct />} />
        <Route path="/dashboard" element={<PageDashboard />} />
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
