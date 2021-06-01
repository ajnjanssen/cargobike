import React, {Component} from 'react'; 
import {Map, GoogleApiWrapper} from 'google-maps-react';
import GoogleMapsCustomMarker from './GoogleMapsCustomMarker';
import '../Googlemap.css';

//Export a childclass of parentclass 'component'
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        mapCenter: {
        lat: 53.21884687009138 + 0.0075,
        lng: 6.567805007614006
        },    
        markerLocation: {
        lat: this.props.locationMarkerlat,
        lng: this.props.locationMarkerlng,
        }
    }

    render() {

    return( 
        <Map className="map"
            google={this.props.google}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
            }}
            center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
            }}
            zoom={12}
        >
<<<<<<< Updated upstream
            {/* P+R Kardinge 
=======
            {/* P+R Kardinge */}
>>>>>>> Stashed changes
            <GoogleMapsCustomMarker
                foo="bar"
                name={'halte'}
                position={{lat: 53.23818285334112, lng: 6.59414209732099 }} 
<<<<<<< Updated upstream
            />*/}

            {/* P+R Hoogkerk 
=======
            />

            {/* P+R Hoogkerk */}
>>>>>>> Stashed changes
            <GoogleMapsCustomMarker
            foo="meh"
            name={'halte'}
            position={{lat: 53.19762858868361, lng: 6.513166262838857}} 
<<<<<<< Updated upstream
            />*/}

            {/* P+R Hoofdstation */}
            <GoogleMapsCustomMarker
            foo="bla"
=======
            />

            {/* P+R Hoofdstation */}
            <GoogleMapsCustomMarker
            foo="ay"
>>>>>>> Stashed changes
            name={'halte'}
            position={{lat: 53.211712978442634, lng: 6.561086218719561 }} 
            />

<<<<<<< Updated upstream
            {/* P+R Euroborg 
=======
            {/* P+R Euroborg */}
>>>>>>> Stashed changes
            <GoogleMapsCustomMarker
            foo="work"
            name={'halte'}
            position={{lat: 53.209844738596495, lng: 6.593501203378418 }} 
<<<<<<< Updated upstream
            />*/}

            {/* P+R Zernike 
=======
            />

            {/* P+R Zernike */}
>>>>>>> Stashed changes
            <GoogleMapsCustomMarker
            foo="it"
            name={'halte'}
            position={{lat: 53.2448297264615, lng: 6.528572957354985 }} 
<<<<<<< Updated upstream
            />*/}
=======
            />
>>>>>>> Stashed changes
            </Map>
    );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMXO_Mrs5mj0tvvf4o8YSRDXjiqo8en30')
})(MapContainer)