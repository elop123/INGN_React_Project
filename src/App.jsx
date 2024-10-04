import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/MainLayout/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Alle from './pages/Alle';
import Details from './pages/Details';
import Category from './pages/Category';
import LoginPage from './pages/LoginPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Alle />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App
