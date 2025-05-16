"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import type { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";

const containerStyle = {
  width: "400px",
  height: "400px",
  border: "1px solid black"
};

const mapStyles = [
  {
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#878787"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#f9f5ed"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#aee0f4"
      }
    ]
  }
]

const center = {
  lat: 48.6149893,
  lng: 17.8352878,
};

const libraries: Libraries = ["marker"];

export const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          onClick={() => {
            const destination = `${center.lat},${center.lng}`;
            const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
            window.open(url, "_blank");
          }}
          position={center}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
