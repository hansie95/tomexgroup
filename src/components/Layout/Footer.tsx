import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Building, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const COMPANY_LOCATION = {
  lat: 47.469861,
  lng: 19.122633,
};

const sectors = [
  { name: 'footer.sectors.gift', path: '/sectors/gift' },
  { name: 'footer.sectors.med', path: '/sectors/med' },
  { name: 'footer.sectors.sport', path: '/sectors/sport' },
  { name: 'footer.sectors.tech', path: '/sectors/tech' },
  { name: 'footer.sectors.hotel', path: '/sectors/hotel' },
];

// Custom map style with brand colors
const mapStyle = {
  water: {
    url: `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${process.env.REACT_APP_STADIA_API_KEY}`,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }
};

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  // Custom icon for the marker
  const customIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: #21514E; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;">
            <div style="width: 6px; height: 6px; background-color: white; border-radius: 50%;"></div>
          </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  return (
    <footer className="bg-tomex-dark-teal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Building className="w-8 h-8 text-tomex-light-teal" />
              <span className="text-2xl font-bold">Tomex Group</span>
            </div>
            <p className="text-gray-300 max-w-sm">
            {t("footer.description")}
            </p>
          </div>

          {/* Sectors Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">{t("footer.ourSectors")}</h3>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.path}>
                  <Link
                    to={sector.path}
                    className="text-gray-300 hover:text-tomex-light-teal transition-colors"
                  >
                    {t(sector.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">{t("footer.contactUs")}</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@tomexgroup.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-tomex-light-teal transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@tomex.hu</span>
              </a>
              <a
                href="tel:+36306654360"
                className="flex items-center space-x-3 text-gray-300 hover:text-tomex-light-teal transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+36 30 665 4360</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>{`${t("footer.hungary")}, 1107 Budapest Száva ${t("footer.street")} 4/b`}</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="col-span-1 lg:col-span-1 h-[300px] rounded-lg overflow-hidden">
            <MapContainer
              center={[COMPANY_LOCATION.lat, COMPANY_LOCATION.lng]}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
              zoomControl={false}
            >
              <TileLayer
                attribution={mapStyle.water.attribution}
                url={mapStyle.water.url}
                className="map-tiles"
              />
              <Marker position={[COMPANY_LOCATION.lat, COMPANY_LOCATION.lng]} icon={customIcon}>
                <Popup className="custom-popup">
                  <div className="font-semibold text-tomex-dark-teal">Tomex Group</div>
                  <div className="text-gray-600">Száva utca 4/b, Budapest</div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Tomex Group. {t("footer.allRighReserved")}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-tomex-light-teal transition-colors">
              {t("footer.privacyPolicy")}
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-tomex-light-teal transition-colors">
              {t("footer.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .leaflet-container {
            font-family: inherit;
          }
          .custom-popup .leaflet-popup-content-wrapper {
            border-radius: 12px;
            padding: 8px;
          }
          .custom-popup .leaflet-popup-content {
            margin: 8px 12px;
          }
          .custom-popup .leaflet-popup-tip-container {
            margin-top: -1px;
          }
          .map-tiles {
            filter: hue-rotate(160deg) saturate(0.8) brightness(1.1);
          }
          .leaflet-control-attribution {
            font-size: 10px;
          }
          .leaflet-popup-content-wrapper, .leaflet-popup-tip {
            background-color: white;
            color: #21514E;
            box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </footer>
  );
};