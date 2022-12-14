import { React, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from './Footer';
import Map from '../components/Map';
import '../styles/dashboard.css';
import Search from './Search';

function Dashboard() {
  const [chargeSites, setchargeSites] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [chargerStatus, setChargerStatus] = useState('');
  const [plugFinder, setPlugFinder] = useState([]);
  const [openSearchBar, setOpenSearchBar] = useState(true);
  const [returnedPlugType, setReturnedPlugType] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="dashboard_map-box">
        {openSearchBar === true && (
          <Search
            className="dashboard_search"
            setchargeSites={setchargeSites}
            setChargerStatus={setChargerStatus}
            chargeSites={chargeSites}
            setPlugFinder={setPlugFinder}
            plugFinder={plugFinder}
            setReturnedPlugType={setReturnedPlugType}
          />
        )}
        <Map
          className="dashboard_map"
          userCoords={coordinates}
          chargeSites={
            returnedPlugType
              ? chargeSites.filter((e) =>
                  e.Connector.some(
                    (e) => e.ConnectorType === returnedPlugType.ConnectorType
                  )
                )
              : chargeSites
          }
          chargerStatus={chargerStatus}
        />
      </div>
      <Footer
        className="dashboard__footer"
        setOpenSearchBar={setOpenSearchBar}
      />
    </div>
  );
}

export default Dashboard;
