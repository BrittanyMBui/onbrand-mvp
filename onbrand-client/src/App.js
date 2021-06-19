import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Router>
  );
}

export default App;
