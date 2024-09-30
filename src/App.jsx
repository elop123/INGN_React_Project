import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/MainLayout/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Alle from './pages/Alle';
import Videnskab from './pages/Videnskab';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Alle />} />
            <Route path="/videnskab" element={<Videnskab />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
