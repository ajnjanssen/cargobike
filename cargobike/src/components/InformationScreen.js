// This information screen is used to configure all information trough a certain consistant screen. For instance, this screen is used for the onboarding of an user.

// any questions about this component can be asked to Isa Winkenius

// The css that is used for this component is in holding of 'InformationScreen.css' and partly from 'App.css'
import '../InformationScreen.css';
import '../App.css';

// creating the component buttons (if a button is secundair, like a backbutton or 'other options' button, it will be known and their apperance will be changed.)
function InformationScreenButton(properties) { 
    if(properties.secundair){
        return ( 
            <a href={properties.link} className="btn-information-screen-secundair">{properties.text}
          </a>
       );
    }

    if(properties.semiSecundair) {
        return ( 
            <a href={properties.link} className="btn-information-screen-semi-secundair">{properties.text}
          </a>
       );
    }

     return ( 
          <a href={properties.link} className="btn-information-screen">{properties.text}
        </a>
     );
    } 

/**
 * Building an Information screen with this component 'InformationScreen'
 * @param {string} title - Title of the screen by 'h1'.
 * @param {string} text - Description or instructions of the screen by 'p'.
 * @param {object} buttons - Object with details for the button by 'button'
 *                              -> 'text' = text inside of the button
 *                              -> 'label' = label above of the button
 *                              -> 'link' = link to other page
 *                              -> 'secundair' = if the button is a back button, other options button 
 */

function InformationScreen (title, text, image, buttons) {
    
    return (
        <div className="information-container">

            <img    className="information-image" 
                    alt="onboarding-image" 
                    src={image}>
             </img>

            <h1 className="information-title">{title}</h1>
            <p className="information-text">{text}</p>

            { buttons.map((button) => {
                    if (button.label) {
                        return [
                            <div className='information-screen-button-label'>{button.label}
                            </div>, InformationScreenButton(button)
                        ]
                        
                    }

                    return InformationScreenButton(button)
                }) 
            }

        </div>

    );
    
}

export default InformationScreen
