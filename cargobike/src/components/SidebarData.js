import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SendIcon from '@material-ui/icons/Send';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import UpdateIcon from '@material-ui/icons/Update';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export const SidebarData = [
    {
        title: 'Test',
        path: '/Test',
        icon: <DashboardIcon />,
        cName: 'nav-text'
    },

        {
            title: 'OndDashboard',
            path: '/OndDashboard',
            icon: <DashboardIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Cargobike zelf huren',
            path: '/',
            icon: <DirectionsBikeIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Paketten verzenden',
            path: '../',
            icon: <SendIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Paketten opzoeken',
            path: '../',
            icon: <AllInboxIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Bekijk binnenstad',
            path: '../',
            icon: <LocationCityIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Reserveringen bekijken',
            path: '../',
            icon: <UpdateIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Mijn zendingen',
            path: '../',
            icon: <SendIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Mijn cargobike huren',
            path: '../',
            icon: <DirectionsBikeIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Mijn account',
            path: '../',
            icon: <AccountCircleIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Contact',
            path: '../',
            icon: <ContactSupportIcon />,
            cName: 'nav-text'
        },

        {
            title: 'Uitloggen',
            path: '../',
            icon: <ExitToAppIcon />,
            cName: 'nav-text'
        },
]
