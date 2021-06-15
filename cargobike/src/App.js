import './App.css';
import Header from "./Header";

// same header, but only the green background
import LogdOutHeader from "./logdOutHeader";

import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Registration from './pages/Registration';
import OndReservering from './pages/OndReservering'
import OndDashboard from './pages/OndDashboard'
import BezDashboard from './BezDashboard'
import Login from './pages/Login';
import OndZending from './OndZending';

// import Onboarding from './src/pages/onboarding/Onboarding'
import Onboarding from './pages/onboarding/Onboarding';
import Onboarding1 from './pages/onboarding/Onboarding-1';
import Onboarding2 from './pages/onboarding/Onboarding-2';
import OndOnboarding1 from './pages/onboarding/OndOnboarding-1';
import OndOnboarding2 from './pages/onboarding/OndOnboarding-2';
import BezOnboarding1 from './pages/onboarding/BezOnboarding-1';
import MonOnboarding1 from './pages/onboarding/MonOnboarding-1';

// import Monteur schermen from './src/pages'
import MonCargobike from './pages/MonCargobike';
// MonCargobikeBroken is a temporary fix until it's data is stored
import MonCargobikeBroken from './pages/MonCargobikeBroken';
import MonDashboard from './pages/MonDashboard';
import MonHalte from './pages/MonHalte';
import MonCbOverzicht from './pages/MonCbOverzicht';

import OndCbWijzigen from './pages/OndCbWijzigen';
import OndSend from './pages/OndSend';
import UserInformation from './pages/UserInformation';
import UserInformationData from './pages/UserInformationData';

function App() {

  // states are being set to show the header and navbar components
  let [enableHeader, setEnableHeader] = React.useState(true);
  let [enableNavbar, setEnableNavBar] = React.useState(true);

  // if the event listener hears a hideHeaderElements it will hide the Header and Navbar components. See Onboarding.js how to add an event dispatcher.
  window.addEventListener('showLogdOutHeader', function (e) {
    setEnableHeader(false);
    setEnableNavBar(false);
  }, false);
  
    return ( 
      <div>
      <Router>

      {/* check for including the header and/or navbar on the page. */}
      { enableHeader ?
          <Header/>
          : <LogdOutHeader/>
        }
      { enableNavbar && 
          <Navbar/>
        }

        <Switch>
            {/* <OndSend /> */}
            {/* Default location is the Onboarding screen */}
              <Redirect exact from="/" to="/Onboarding" />
              <Route path='/OndSend' exact component={OndSend}/>
              <Route path='/OndDashboard' exact component={OndDashboard}/>
              <Route path='/OndReservering' exact component={OndReservering}/>
              <Route path='/BezDashboard' exact component={BezDashboard}/>
              <Route path='/components/Login' exact component={Login}/>
              <Route path='/OndZending' exact component={OndZending}/>
              <Route path='/Registration' exact component={Registration}/>
              <Route path='/Login' exact component={Login}/>
            {/* Start links to onboarding.js to start onboarding + other links for onboarding the Ond */}
              <Route path='/Onboarding' exact component={Onboarding}/>
              <Route path='/Onboarding-1' exact component={Onboarding1}/>
              <Route path='/Onboarding-2' exact component={Onboarding2}/>
              <Route path='/OndOnboarding-1' exact component={OndOnboarding1}/>
              <Route path='/OndOnboarding-2' exact component={OndOnboarding2}/>
              <Route path='/BezOnboarding-1' exact component={BezOnboarding1}/>
              <Route path='/MonOnboarding-1' exact component={MonOnboarding1}/>
            {/* End onboarding routes */}
            {/* Start monteur scherm routes */}
              <Route path='/MonDashboard' exact component={MonDashboard}/>
              <Route path='/MonCargobike' exact component={MonCargobike}/>
              <Route path='/MonCargobikeBroken' exact component={MonCargobikeBroken}/>
              <Route path='/MonHalte' exact component={MonHalte}/>
              <Route path='/MonCbOverzicht' exact component={MonCbOverzicht}/>
            {/* End monteur scherm routes */}
            <Route path='/UserInformation' exact component={UserInformation}/>
            <Route path='/UserInformationData' exact component={UserInformationData}/>
            <Route path='/OndCbWijzigen' exact component={OndCbWijzigen}/>
        </Switch>
      </Router>
      {/* <OndDashboard /> */}
      {/* // <Registration /> */}
      {/* <OndReservering /> */}
      </div>
  
  );
}

export default App;