import { Navigate, Route, Routes } from 'react-router';
import FlightsPage from './FlightsPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/flights" element={<FlightsPage />} />
      <Route path="*" element={<Navigate to="flights" replace />} />
    </Routes>
  );
};

export default Routing;
