import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import UpdateIcon from '@material-ui/icons/Update';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DirectionsIcon from '@material-ui/icons/Directions';
import CallIcon from '@material-ui/icons/Call';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export const SidebarDataBez = [
    // {
    //     title: 'Test',
    //     path: '/Test',
    //     icon: <DashboardIcon/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Dashboard',
        path: '/BezDashboard',
        icon: <DashboardIcon/>,
        cName: 'nav-text'
    },{
        title: 'Mijn Cargobike',
        path: './BezCargobike',
        icon: <UpdateIcon/>,
        cName: 'nav-text'
    }, 
     {
        title: 'Dagplanning',
        path: '/',
        icon: <AssignmentIcon/>,
        cName: 'nav-text'
    }, {
        title: 'Routes',
        path: '../',
        icon: <DirectionsIcon/>,
        cName: 'nav-text'
    }, {
        title: 'Probleem Melden',
        path: '../',
        icon: <CallIcon/>,
        cName: 'nav-text'
    }, 
    //     title: 'Bekijk binnenstad',
    //     path: '../',
    //     icon: <LocationCityIcon/>,
    //     cName: 'nav-text'
    // }, {
        //     title: 'Mijn zendingen',
    //     path: '../',
    //     icon: <SendIcon/>,
    //     cName: 'nav-text'
    // }, {
    //     title: 'Mijn cargobike huren',
    //     path: '../',
    //     icon: <DirectionsBikeIcon/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Mijn account',
        path: '../UserInformation',
        icon: <AccountCircleIcon/>,
        cName: 'nav-text'
    }, 
    // {
    //     title: 'Registreren',
    //     path: '/Registration',
    //     icon: <AccountCircleIcon/>,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Inloggen',
    //     path: '/Login',
    //     icon: <AccountCircleIcon/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Uitloggen',
        path: '../',
        icon: <ExitToAppIcon/>,
        cName: 'nav-text'
    }
]
