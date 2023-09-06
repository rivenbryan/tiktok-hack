"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "354px",
};

const center = {
  lat: 1.42972,
  lng: 103.83591,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBOKETl6q2EAAN1W2RZfClGH4E7RPTX6sE",
  });

  const [map, setMap] = React.useState(null);
  const mapStyles = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels",
      stylers: [{ visibility: "on" }],
    },
  ];

  const onLoad = React.useCallback(function callback(map) {
    // Comment out or remove these lines if you don't want to fit bounds
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
  
    // This line will set the zoom level explicitly, which should override fitBounds
    map.setZoom(18);  // Set your desired zoom level here
  
    setMap(map);
  }, []);
  
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ streetViewControl: false, // turns off the pegman (person) control for street view
      mapTypeControl: false, // turns off the map/satellite toggle
      zoomControl: false, // turns off the +/- zoom buttons
      fullscreenControl: false, // turns off the full screen button
      disableDefaultUI: true,
      styles: mapStyles }}
    >
      <Marker position={center} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
