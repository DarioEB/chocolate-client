import L from 'leaflet';

const IconLocation = L.icon({
    iconUrl: require('../../images/pin.png'),
    iconRetinaUrl: require('../../images/pin.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon", 
})

export default IconLocation;