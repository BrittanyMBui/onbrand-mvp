import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/auth';
import { AuthRoute } from './util/AuthRoute';
import './App.css';

import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        {/* {user ? <Route path='/home' component={Home} /> : <Redirect to="/login" />} */}
        <Route exact path='/home' component={Home} />
        <AuthRoute exact path='/login' component={Login} />
        <AuthRoute exact path='/signup' component={Signup} />
      </Router>
    </AuthProvider>
  );
}

export default App;
