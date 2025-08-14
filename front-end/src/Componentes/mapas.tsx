import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

const libraries: ('marker')[] = ['marker'];
type Props = {
  location: number[]
};

export const MapaGoogle= ({location}:Props) => {
  const center = { lat: location[0], lng: location[1] };
  const mapID: string = '1f702c5c511f3d15f42f8575'
  console.log(location)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAA692QX_XZpGbCXmcvE2GnNf1WZVq7ZVk',
    libraries,
    mapIds: [mapID], 
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '90%', height: '400px' , borderRadius: '15px'}}
      center={center}
      zoom={15}
      mapId={mapID}
    //   onLoad={(map) => {
    //     new google.maps.marker.AdvancedMarkerElement({
    //       map,
    //       position: center,
    //       title: 'Ubicación del restaurante',
    //     });
    //   }}
    />
  );
};






