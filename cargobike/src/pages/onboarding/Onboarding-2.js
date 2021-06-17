// any questions about this page can be asked to Isa Winkenius

import React from 'react'

// import component, {InformationScreen} to create the onboarding page
import InformationScreen from '../../components/InformationScreen';

//this image is used to onboard the user, it's now a free to use image of Pixabay.com as a placeholder.
import InformationScreenImage from '../../img/onboarding-image.png';

// These variables are beforehand defined and can be changed in the progress of onboarding.
var InformationScreenTitle = 'Welkom!';
var InformationScreenText = <text>
                                Wij kunnen u ook een mail hebben gestuurd met een meldcode, bezorgers en monteurs kunnen zich hier aanmelden.
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

    // this event dispatcher gives the event listner the news we don't want an fully enabled header with logo, menu and information button.
    const event = new Event('showLogdOutHeader');
    window.dispatchEvent(event);

        return InformationScreen(InformationScreenTitle, InformationScreenText, InformationScreenImage, [
                {
                    'text': 'Ik wil pakketen rondbrengen', 
                    'label': 'Ik ben de nieuwe bezorger voor CargoDelivery', 
                    'link': '/BezOnboarding-1'
                },
                {
                    'text': 'Ik wil de CargoBikes repareren', 
                    'label': 'Ik ben de nieuwe monteur voor CargoDelivery',
                    'link':'/MonOnboarding-1'
                },
                {
                    'text': 'Terug naar begin', 
                    'secundair': true,
                    'link': '/Onboarding',
                },
            ]);
        
}

export default Onboarding