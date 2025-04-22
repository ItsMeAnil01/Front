import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/prediction" element={<PredictionForm />} />
      <Route path="/results" element={<ResultCard />} />
    </Routes>
  );
};