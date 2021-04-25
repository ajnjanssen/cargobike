import './App.css';
import Header from "./Header";
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import './Body.css';
import Test from './pages/Test';
import OndReservering from './OndReservering'
import OndDashboard from './pages/OndDashboard'
import BezDashboard from './BezDashboard'
import Registration from './components/Registration';
import Login from './components/Login';
import OndZending from './OndZending';

function App() {

    return ( 
      <Router>
        <Header/>
          <Navbar/>
            <Switch>
                <Route path='/Test' exact component={Test}/>
                <Route path='/OndDashboards' exact component={OndDashboard}/>
                <Route path='/OndReservering' exact component={OndReservering}/>
                <Route path='/BezDashboard' exact component={BezDashboard}/>
                <Route path='/components/Registration' exact component={Registration}/>
                <Route path='/components/Login' exact component={Login}/>
                <Route path='/OndZending' exact component={OndZending}/>
            </Switch>
      </Router>
  
  );
}

export default App;