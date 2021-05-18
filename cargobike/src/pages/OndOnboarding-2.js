// any questions about this page can be asked to Isa Winkenius

import React from 'react'
// import component, {InformationScreen} to create the onboarding page
import InformationScreen from '../components/InformationScreen';

// These variables are beforehand defined and can be changed in the progress of onboarding.
var InformationScreenTitle = '2. Huur een cargobike voor elke vracht';
var InformationScreenText = <text>
                                Als je de bezorgtijden hebt uitgekozen kan je een cargobike huren om zelf aan de slag te gaan, of je laat een bezorger je pakketten rondbrengen! <br/><br/>Hoe dan ook, je betaald een maandelijks bedrag en kan daarna onbeperkt pakketten rondbrengen.
                            </text>;

/**
 * Building an Onboarding page with component 'InformationScreen'
 *  * @param {string} InformationScreenTitle - Page title in green
 *    @param {string} InformationScreenText - Page text/description underneath title
 *    @param {object} buttons - Include all the buttons for this page in an object
 *                                  -> 'text' = the text inside of the button
 *                                  -> 'label' = the label above the button with description
 *                                  -> 'link' = the link to navigate by click on the button 
 */

function Onboarding() {

        return InformationScreen(InformationScreenTitle, InformationScreenText, [
                {
                    'text': 'Laten we beginnen!',  
                    'link': '/Registration'
                },
                
            ]);
        
}

export default Onboarding