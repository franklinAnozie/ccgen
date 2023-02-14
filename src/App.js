import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { AppProvider } from './context/regContext';

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/" 
            element={<Home />} />
          <Route
            path="/dashboard/:id"
            element={
              <AppProvider>
                <Dashboard />
              </AppProvider>
              } />
        </Routes>
      </Router>
    </main>
  );
}

export default App;