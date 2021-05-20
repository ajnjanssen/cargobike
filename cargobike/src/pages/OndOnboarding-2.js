// any questions about this page can be asked to Isa Winkenius

import React from 'react'
// import component, {InformationScreen} to create the onboarding page
import InformationScreen from '../components/InformationScreen';

//this image is used to onboard the user, it's now a free to use image of Pixabay.com as a placeholder.
import InformationScreenImage from '../img/onboarding-image.png';

// These variables are beforehand defined and can be changed in the progress of onboarding.
var InformationScreenTitle = '2. Huur een cargobike voor elke vracht';
var InformationScreenText = <text>
                                Wanneer u een bezorgtijd heeft uigekozen, kunt u de cargobike huren om zelf aan de slag te gaan. Of je laat een bezorger je pakketten rondbrengen. <br/><br/>Onbeperkt pakketten bezorgen in Groningen!
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
                    'text': 'Laten we beginnen!',  
                    'link': '/Registration'
                },
                {
                    'text': 'Terug', 
                    'link': '/OndOnboarding-1',
                    'secundair': true,
                },
            ]);
        
}

export default Onboarding