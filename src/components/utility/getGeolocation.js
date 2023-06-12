export default function getGeolocation(setCoordinates) {
  if ('geolocation' in navigator) {
    console.log('Geo location Available');
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinates([position.coords.latitude, position.coords.longitude]);
    });
  } else {
    console.log('Geo location Not Available. Using default coordinates');
    setCoordinates([51.505, -0.09]);
  }
}
