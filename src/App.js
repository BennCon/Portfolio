import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Code from './components/pages/Code';
import ContactMe from './components/pages/ContactMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/code' exact component={Code}/>
            <Route path='/contact' exact component={ContactMe}/>
        </Switch>
    </Router>
  );
}

export default App;