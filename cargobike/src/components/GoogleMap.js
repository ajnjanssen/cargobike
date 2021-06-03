import React, {Component} from 'react'; 
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import GoogleMapsCustomMarker from './GoogleMapsCustomMarker';
import '../Googlemap.css';



//Export a childclass of parentclass 'component'
export class MapContainer extends Component {
    //States declared here
    state = {
        showingInfoWindow: false,
        mapCenter: {
        lat: 53.21884687009138 + 0.0075,
        lng: 6.567805007614006
        },    
        markerLocation: {
        lat: this.props.locationMarkerlat,
        lng: this.props.locationMarkerlng,
        },
        styleClass: this.props.styleclassname || 'MonHalteMap',
        busted_cb: this.props.busted_cb || [],
    }

    render() {

    return( 
        <>
        <Map className={this.state.styleClass}
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
            mapTypeControl = {false}
        >
            {this.state.busted_cb.map((bike)=>
                <GoogleMapsCustomMarker
                    id = {bike.id}
                    position={{lat: bike.lat, lng: bike.lng}}
                ></GoogleMapsCustomMarker>                
            )}
            
            {/* P+R Kardinge 
            <GoogleMapsCustomMarker
                foo="bar"
                name={'halte'}
                position={{lat: 53.23818285334112, lng: 6.59414209732099 }} 
            />*/}

            {/* P+R Hoogkerk 
            <GoogleMapsCustomMarker
            foo="meh"
            name={'halte'}
            position={{lat: 53.19762858868361, lng: 6.513166262838857}} 
            />*/}

            {/* P+R Hoofdstation */}
            <GoogleMapsCustomMarker
                foo="bla"
                name={'halte'}
                position={{lat: 53.211712978442634, lng: 6.561086218719561 }} 
            />

            {/* P+R Euroborg 
            <GoogleMapsCustomMarker
            foo="work"
            name={'halte'}
            position={{lat: 53.209844738596495, lng: 6.593501203378418 }} 
            />*/}

            {/* P+R Zernike 
            <GoogleMapsCustomMarker
            foo="it"
            name={'halte'}
            position={{lat: 53.2448297264615, lng: 6.528572957354985 }} 
            />*/}
            </Map>
        </>
    );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMXO_Mrs5mj0tvvf4o8YSRDXjiqo8en30')
})(MapContainer)