import { useState, useEffect, useContext } from 'react';
import React, { setGlobal, useGlobal } from 'reactn';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  MapBox,
  Marker,
  GoogleMapContext
} from '@googlemap-react/core';

import Button,  { ButtonVariants, ButtonSizes } from '../../../_shared/components/Button/Button-component';
import inactivePinIcon from '../../../_images/icons/inactiveMarker.svg';
import activePinIcon from '../../../_images/icons/activeMarker.svg';
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

        setGlobal({
          map: {
            activeLocation: locations[0],
          },
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
        locations.map((loc, index) => {
          return (
            <div key={index}>
              <Marker
                id={index}
                opts={{
                  position: loc,
                  opacity: 1,
                  icon: (location && location.activeLocation && location.activeLocation.id === loc.id) ? activePinIcon : inactivePinIcon
                }}
                onClick={() => {
                  setGlobal({
                    map: {
                      activeLocation: {
                        ...loc,
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
          <div className="map__search-here">
            <Button variant={ButtonVariants.basic} size={ButtonSizes.small} onClick={handleSearchHere}>
                Search here
            </Button>
          </div>
      }
    </div>
  )
}

export default Map;