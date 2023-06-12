export default function getGeolocation(dispatch) {
  if ('geolocation' in navigator) {
    console.log('Geo location Available');
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch({
        type: 'SET_GEO_COORDS',
        payload: [position.coords.latitude, position.coords.longitude],
      });
    });
  } else {
    console.log('Geo location Not Available. Using default coordinates');
    dispatch({
      type: 'SET_GEO_COORDS',
      payload: [51.505, -0.09],
    });
  }
}
