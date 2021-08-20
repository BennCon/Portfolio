import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Code from './components/pages/Code';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/code' exact component={Code}/>
        </Switch>
    </Router>
  );
}

export default App;