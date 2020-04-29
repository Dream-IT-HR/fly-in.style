export default {
  mapBoxOptions: {
    zoom: 15,
    zoomControl: false,
    fullscreenControl: false,
    styles: [
      {
        featureType: 'poi',
        stylers: [{visibility: 'off'}],
      },
    ],
  },
  mapStyles: {
    height: '70%',
    width: '100%',
  },
  // TODO: Move this to some config file
  apiKey: 'AIzaSyCnP6m8gdQSmYkJavf7rpvXp5X4po-gkq4',
};