import { useState, useEffect, useContext } from 'react';
import React, { setGlobal, useGlobal } from 'reactn';
import {
  MapBox,
  Marker,
  GoogleMapContext
} from '@googlemap-react/core';

import activePinIcon from '../../../_images/icons/activeMarker.svg';

import Button,  { ButtonVariants, ButtonSizes } from '../../../_shared/components/Button/Button-component';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import locations from '../mocks/locations';

const mapStyle = {
  height: "70%",
  width: "100%",
}

const Map = () => {
  const [errorGeoLocation, setErrorGeoLocation] = useState(false);
  const [center, setCenter] = useState(null);
  const [showSearchMore, setSearchMore] = useState(false);

  const { state } = useContext(GoogleMapContext);
  const [ location ] = useGlobal('map');

  useEffect(() => {
    const success = position => {
      setErrorGeoLocation(false);
      if (!location) {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      } else {
        setCenter({
          lat: location.activeLocation.lat,
          lng: location.activeLocation.lng,
        });
      }
    }

    const error = () => setErrorGeoLocation(true);

    navigator.geolocation.getCurrentPosition(success, error);
  }, [state.map, location]);

  const handleSearchHere = () => setSearchMore(!showSearchMore);

  if (errorGeoLocation) return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="test" name="newSearch" />
            <ErrorMessage name="newSearch" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )

  return (
    <div>
      <MapBox
        apiKey="AIzaSyCnP6m8gdQSmYkJavf7rpvXp5X4po-gkq4"
        opts={{
          center,
          zoom: 15,
          zoomControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: 'poi',
              stylers: [{visibility: 'off'}]
            },
          ]
        }}
        className="map"
        style={mapStyle}
        onDragEnd={() => setSearchMore(true)}
      />
      {
        locations.map((location, index) => {
          return (
            <div key={index}>
              <Marker
                id={index}
                opts={{
                  position: location,
                  opacity: 1,
                  icon: location.icon,
                }}
                onClick={() => {
                  setGlobal({
                    map: {
                      activeLocation: {
                        ...location,
                        icon: activePinIcon,
                      },
                    },
                  });
                }}
              />
            </div>
          )
        })
      }
      {
        showSearchMore &&
          <div style={{position: 'absolute', bottom: '32%', alignSelf: 'center', width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Button variant={ButtonVariants.basic} size={ButtonSizes.small} onClick={handleSearchHere}>
                Search here
            </Button>
          </div>
      }
    </div>
  )
}

export default Map;