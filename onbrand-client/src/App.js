import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { AuthRoute } from './util/AuthRoute';
import './App.css';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Route exact path='/' component={Home} />
        <AuthRoute exact path='/login' component={Login} />
        <AuthRoute exact path='/signup' component={Signup} />
      </Router>
    </AuthProvider>
  );
}

export default App;
