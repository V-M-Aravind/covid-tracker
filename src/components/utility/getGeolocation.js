import { DEFAULT_COORDINATES } from '../constants';

export default function getGeolocation(dispatch) {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      onGeoLocationSuccess(position, dispatch);
    }, onGeoLocationError.bind(null, dispatch));
  } else {
    onGeoLocationError(dispatch);
  }
}

function onGeoLocationSuccess(position, dispatch) {
  console.log('Geo location Available');
  dispatch({
    type: 'SET_GEO_COORDS',
    payload: [position.coords.latitude, position.coords.longitude],
  });
}

function onGeoLocationError(dispatch) {
  console.error('Geo location Not Available. Using default coordinates');
  dispatch({
    type: 'SET_GEO_COORDS',
    payload: { coordinates: DEFAULT_COORDINATES, geoLocationFetchError: true },
  });
}
