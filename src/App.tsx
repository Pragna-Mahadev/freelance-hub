import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HomeContent() {
  return (
    <>
      <h1>Welcome to Freelance Hub 👩‍💻</h1>
      <p>Join us to connect with freelancers and clients, find projects, and grow your career.</p>
      <p>Ready to get started?</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <p>Explore our features, connect with the community, and start your freelancing journey today!</p>
      <p>Need help? Visit our <Link to="/help">Help Center</Link> or contact us at <a href="mailto:support@freelancehub.com"></a>.</p>
    </>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
