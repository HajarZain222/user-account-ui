import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    );
}

export default App;
