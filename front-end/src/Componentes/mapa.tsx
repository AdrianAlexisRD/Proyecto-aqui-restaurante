import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiYWxleGFnaG0iLCJhIjoiY21kZjhtY3liMGFuaDJscHkxM2d6c3k0eCJ9.WHS5I8EMqBJnT0GVNHz6gw";

type Props = {
  ubicacion: number[]
};

export default function MiMapa({ ubicacion }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  // console.log(ubicacion)
  useEffect(() => {
    if (map.current) return;

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/navigation-day-v1",
        center: [ubicacion[0], ubicacion[1]],
        zoom: 11,
      });

      // Controles de navegación
      map.current.addControl(new mapboxgl.NavigationControl());
    }

    
  }, [ubicacion]);




  return (
    <div className="w-100 h-100">
      
      <div
        ref={mapContainer}
          style={{
        width: "400px",
        height: "300px", // ✅ Esto es vital
        borderRadius: "50px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      }}
      />
    </div>
  );
}


