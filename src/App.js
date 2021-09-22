import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react'
import { AuthProvider } from './context/auth';
import { AuthRoute } from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <NavBar />
          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/register' component={Register} />
          <AuthRoute exact path='/login' component={Login} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
