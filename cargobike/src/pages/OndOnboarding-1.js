// any questions about this page can be asked to Isa Winkenius

import React from 'react'
// import component, {InformationScreen} to create the onboarding page
import InformationScreen from '../components/InformationScreen';

//this image is used to onboard the user, it's now a free to use image of Pixabay.com as a placeholder.
import InformationScreenImage from '../img/onboarding-image.png';

// These variables are beforehand defined and can be changed in the progress of onboarding.
var InformationScreenTitle = '1. Stel je reservering samen';
var InformationScreenText = <text>
                                Het is nog nooit zo makkelijk geweest om een cargobike te huren!<br/><br/>Plaats een reservering voor uw pakketten en kies een tijdsvak wanneer de pakketten bezorgt moeten worden.
                            </text>;

/**
 * Building an Onboarding page with component 'InformationScreen'
 *  * @param {string} InformationScreenTitle - Page title in green
 *    @param {string} InformationScreenText - Page text/description underneath title
 *    @param {object} buttons - Include all the buttons for this page in an object
 *                                  -> 'text' = the text inside of the button
 *                                  -> 'label' = the label above the button with description
 *                                  -> 'link' = the link to navigate by click on the button 
 *                                  -> 'secundair' = if the button is a back button, other options button 
 */

function Onboarding() {

        return InformationScreen(InformationScreenTitle, InformationScreenText, InformationScreenImage, [
                {
                    'text': 'Volgende',  
                    'link': '/OndOnboarding-2'
                },
                {
                    'text': 'Terug', 
                    'link': '/Onboarding',
                    'secundair': true,
                },
            ]);
        
}

export default Onboarding