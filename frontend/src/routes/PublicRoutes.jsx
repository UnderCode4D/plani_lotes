import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/home/Homepage";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Ruta para la página de inicio */}
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default PublicRoutes;
