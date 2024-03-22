import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PageProduct from "./pages/PageProduct";
import PageDashboard from "./pages/PageDashBoard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:productId" element={<PageProduct />} />
        <Route path="/dashboard" element={<PageDashboard />} />
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
