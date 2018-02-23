import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const coordinates = {
    lat: props.coords.latitude,
    lng: props.coords.longitude
  }

  return (<GoogleMap defaultZoom={14} center={coordinates}>
    {props.isMarkerShown && <Marker position={coordinates} />}
  </GoogleMap>)
})

export default Map
