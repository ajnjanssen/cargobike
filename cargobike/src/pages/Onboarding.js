// any questions about this page can be asked to Isa Winkenius

import React from 'react'
// import component, {InformationScreen} to create the onboarding page
import InformationScreen from '../components/InformationScreen';

// These variables are beforehand defined and can be changed in the progress of onboarding.
var InformationScreenTitle = 'Cargobike';
var InformationScreenText = <text>
                                De logistieke oplossing voor de duurzame ondernemer van onze Groningse binnenstad.
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

        return InformationScreen(InformationScreenTitle, InformationScreenText, [
                {
                    'text': 'Ik wil pakketten verzenden', 
                    'label': 'Ik ben een ondernemer', 
                    'link': '/OndOnboarding-1'
                },
                {
                    'text': 'Ik wil pakketten bezorgen', 
                    'label': 'Ik ben een bezorger'
                },
                {
                    'text': 'Andere account opties', 
                    'link': '/Onboarding',
                    'secundair': true,
                },
                
            ]);
        
}

export default Onboarding