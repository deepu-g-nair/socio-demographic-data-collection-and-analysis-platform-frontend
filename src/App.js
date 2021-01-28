import React from 'react';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Admindash from './components/Admindash'
import Adminlogin from './components/Adminlogin'
import Barchart from './components/BarChart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/dash" exact component={Dashboard} />
          <Route path="/adminlogin" exact component={Adminlogin} />
          <Route path="/admindash" exact component={Admindash} />
          <Route path="/chart" exact component={Barchart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
