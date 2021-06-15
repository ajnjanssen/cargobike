import React, {Component} from 'react'; 
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import GoogleMapsCustomMarker from './GoogleMapsCustomMarker';
//import GoogleMapsHalteMarker from './GoogleMapsHalteMarker';
import '../Googlemap.css';

export class MapContainer extends Component {
    //States go here
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
        bustedCb: this.props.bustedCb || [],
        haltes: this.props.haltesLocaties || [],
    }

    render() {
    //Functions go here
    return( 
        //View goes here
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

            {/* Render busted cargobikes */}
            {this.state.bustedCb.map((bike)=>
                <GoogleMapsCustomMarker
                    id = {bike.id}
                    position={{lat: bike.lat, lng: bike.lng}}
                    nr = {bike.nr}
                    cond = {bike.conditie}
                    rad = {bike.radius}
                    type = {bike.type}
                ></GoogleMapsCustomMarker>                
            )}

            {/* Render haltes */}
            {this.state.haltes.map((halte)=>
                <GoogleMapsCustomMarker
                    position={{lat: halte.lat, lng: halte.lng}}
                />
            )}
            
            </Map>
        </>
    );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMXO_Mrs5mj0tvvf4o8YSRDXjiqo8en30')
})(MapContainer)