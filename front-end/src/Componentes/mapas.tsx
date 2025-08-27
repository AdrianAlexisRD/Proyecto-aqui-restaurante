import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
const mapaKey = import.meta.env.VITE_MAPA_KEY;
const mapaId = import.meta.env.VITE_MAPA_ID;


const libraries: ('marker')[] = ['marker'];
type Props = {
  location: number[]
};

export const MapaGoogle= ({location}:Props) => {
  const center = { lat: location[0], lng: location[1] };
  console.log(mapaKey +' '+ mapaId)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapaKey,
    libraries,
    mapIds: [mapaId], 
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <div className='w-[100%] h-[100%]'>

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' , borderRadius: '15px'}}
        center={center}
        zoom={18}
        options={{
         mapId: mapaId
  }}
      //   onLoad={(map) => {
      //     new google.maps.marker.AdvancedMarkerElement({
      //       map,
      //       position: center,
      //       title: 'Ubicación del restaurante',
      //     });
      //   }}
      />
    </div>
  );
};






