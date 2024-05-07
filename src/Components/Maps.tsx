import React, { useEffect } from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Icon } from "leaflet";

const Maps = () => {
  const [country, setCountry]: any = useState([]);
  useEffect(() => {
    async function getMovieArray() {
      const recievedDataArray = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      setCountry(recievedDataArray.data);
    }
    getMovieArray();
  }, []);
  console.log(country);
  //Center of Map
  const [center, setCenter] = useState({ lat: 20, lng: 77 });
  const ZOOM_LEVEL = 9;
  return (
    <div>
      <MapContainer center={center} zoom={ZOOM_LEVEL}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {country.length >= 1 &&
          country.map((i) => (
            <Marker
              key={i && i.countryInfo && i.countryInfo._id}
              position={[i && i.countryInfo?.lat, i && i.countryInfo?.long]}
              icon={
                new Icon({
                  iconUrl: i.countryInfo.flag ? i.countryInfo.flag : "",
                  iconSize: [38, 38],
                })
              }
            >
              <Popup>
                <h1 className="text-lg font-bold text-blue-800">
                  {i.country}, {i.continent}
                </h1>
                <h1 className="text-gray-900">
                  Population:
                  <span className="font-semibold ">{i.population}</span>
                </h1>
                <h1 className="text-gray-900">
                  Total Cases:<span className="font-semibold ">{i.cases}</span>
                </h1>
                <h1 className="text-gray-900">
                  Active Cases:<span className="font-semibold">{i.active}</span>
                </h1>
                <h1 className="text-gray-900 ">
                  Deaths:<span className="font-semibold">{i.deaths}</span>
                </h1>
                <h1 className="text-gray-900 ">
                  Recovered:<span className="font-semibold">{i.recovered}</span>
                </h1>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
