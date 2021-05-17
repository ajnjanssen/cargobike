import './App.css';
import Header from "./Header";
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Registration from './pages/Registration';
import OndReservering from './pages/OndReservering'
import OndDashboard from './pages/OndDashboard'
import BezDashboard from './BezDashboard'
import Login from './pages/Login';
import OndZending from './OndZending';
// import Onboarding from './pages/Onboarding'
import Onboarding from './pages/Onboarding';

import OndSend from './pages/OndSend';
import UserInformation from './pages/UserInformation';

function App() {

    return ( 
      <div>
      <Router>
        <Header/>
          <Navbar/>
            <Switch>

                
                {/* <OndSend /> */}
                {/* Default location is the login screen */}
                <Redirect exact from="/" to="/Login" />
                <Route path='/OndSend' exact component={OndSend}/>
                <Route path='/OndDashboard' exact component={OndDashboard}/>
                <Route path='/OndReservering' exact component={OndReservering}/>
                <Route path='/BezDashboard' exact component={BezDashboard}/>
                <Route path='/components/Login' exact component={Login}/>
                <Route path='/OndZending' exact component={OndZending}/>
                <Route path='/Registration' exact component={Registration}/>
                <Route path='/Login' exact component={Login}/>
                {/* temporary link to onboarding.js for building the page and testing the build */}
                <Route path='/Onboarding' exact component={Onboarding}/>
                <Route path='/UserInformation' exact component={UserInformation}/>
            </Switch>
      </Router>
      {/* <OndDashboard /> */}
      {/* // <Registration /> */}
      {/* <OndReservering /> */}
      </div>
  
  );
}

export default App;