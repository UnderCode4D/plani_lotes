import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import ClientRoutes from "./routes/ClientRoutes";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import OwnerRoutes from "./routes/OwnerRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Rutas protegidas */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/client/*" element={<ClientRoutes />} />
        <Route path="/employee/*" element={<EmployeeRoutes />} />
        <Route path="/owner/*" element={<OwnerRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
