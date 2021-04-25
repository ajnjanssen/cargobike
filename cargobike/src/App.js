import './App.css';
import Header from "./Header";
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import './Body.css';
import Test from './pages/Test';
import Registration from './pages/Registration';
import OndReservering from './pages/OndReservering'
import OndDashboard from './pages/OndDashboard'
import BezDashboard from './BezDashboard'
// import Registration from './components/Registration';
import Login from './pages/Login';
import OndZending from './OndZending';

function App() {

    return ( 
      <div>
      <Router>
        <Header/>
          <Navbar/>
            <Switch>
                {/* <Route path='/Test' exact component={Test}/> */}
                <Route path='/OndDashboard' exact component={OndDashboard}/>
                <Route path='/OndReservering' exact component={OndReservering}/>
                <Route path='/BezDashboard' exact component={BezDashboard}/>
                <Route path='/components/Login' exact component={Login}/>
                <Route path='/OndZending' exact component={OndZending}/>
                <Route path='/Registration' exact component={Registration}/>
                <Route path='/Login' exact component={Login}/>
            </Switch>
      </Router>
      {/* <OndDashboard />
      <Registration /> */}
      {/* <OndReservering /> */}
      </div>
  
  );
}

export default App;