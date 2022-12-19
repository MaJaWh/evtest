import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/App.css';
import Dashboard from '../components/dashboard';
import Login from '../components/Login';
import ProtectedRoute from './ProtectedRoute';
import SearchForm from './SearchForm';
import CreateAccount from './UserAccount/CreateAccount';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            exact
          />
          <Route
            path="/searchform"
            element={
              <ProtectedRoute>
                <SearchForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createAccount"
            element={
              <ProtectedRoute>
                <CreateAccount />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
