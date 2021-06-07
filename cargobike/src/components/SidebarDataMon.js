import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import UpdateIcon from '@material-ui/icons/Update';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import BuildIcon from '@material-ui/icons/Build';
import CallIcon from '@material-ui/icons/Call';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export const SidebarDataMon = [
    // {
    //     title: 'Test',
    //     path: '/Test',
    //     icon: <DashboardIcon/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Dashboard',
        path: '/MonDashboard',
        icon: <DashboardIcon/>,
        cName: 'nav-text'
    },{
        title: 'Cargobikes Overzicht',
        path: './MonCbOverzicht',
        icon: <UpdateIcon/>,
        cName: 'nav-text'
    }, 
     {
        title: 'Locaties Overzicht',
        path: './MonHalte',
        icon: <EmojiTransportationIcon/>,
        cName: 'nav-text'
    }, 
    // {
    //     title: 'Con',
    //     path: '../',
    //     icon: <SendIcon/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Onderdelen Opvragen',
        path: '../',
        icon: <BuildIcon/>,
        cName: 'nav-text'
    }, 
    // {
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
    {
        title: 'Cargobike Leverancier',
        path: '../',
        icon: <CallIcon/>,
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
