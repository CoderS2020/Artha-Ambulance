import LifeSupport from './assets/LifeSupport.jpg';
import AirAmbulance from './assets/AirAmbulance.jpg';
import BasicLifeSupport from './assets/BasicLifeSupport.jpg';
import TransportVechicle from './assets/TransportVehicle.jpg';

import './ambulance.css';
// import "./animate.css"

import CardComponent from '../../components/CardComponent';

const cardsData = [
  {
    type: 'left',
    heading: 'PATIENT TRANSPORT VEHICLE',
    body: 'The Patient Transport Vehicles are used to transport patients who are in stable condition and do not require much medical attentation. This ambulance helps to transfer patients to and from medical facilities in non-emergency situations and this vehicle can be used for patients who no longer require specialized care (Mainly Stretcher and Wheelchair cases). ',
    image: TransportVechicle,
  },
  {
    type: 'right',
    heading: 'BASIC LIFE SUPPORT',
    body: 'The Basic Life Support Vehicles are essentially used to provide basic medicle care to those people who are in non-life-threatening situations.They are not equipped to sustain critical emergencies for a prolonged duration. These vehicles are mainly used for patients who need non-emergency medical transportation which includes patient requiring oxygen support or basic treatment including outpatient visits to doctors office or the hospital.',
    image: BasicLifeSupport,
  },
  {
    type: 'left',
    heading: 'ADVANCED LIFE SUPPORT',
    body: 'The Advanced Life Support Vehicles are equipped to provide emergency service for urgent prehospital treatement and stabilization during serious emergencies and to transport the patients to definitive care. These ambulances are mainly used treat critical emergencies where there is a need for respiratory support or oxygen support. ALS vehicles are equipped with all the equipments needed for critical emergencies.',
    image: LifeSupport,
  },
  {
    type: 'right',
    heading: 'AIR AMBULANCE',
    body: 'We support by dispensing Air ambulance services focused mainly on offering emergency air care services globally. These services are useful in treating emergencires where patients need extremely important medical care which is not within their vicinity. The patients will be transferred from one place to another for better treatement if not available at their place using the Aeromedical evacuation. This service is provided for patients who need a faster mode of transport along with the medical treatment.',
    image: AirAmbulance,
  },
];

export default function Ambulance() {
  return (
    <div>
      <div class="landing">
        <h1 class="heading">OUR AMBULANCES</h1>
      </div>
      <div class="container-fluid ">
        {cardsData.map((card, i) => (
          <CardComponent {...card} />
        ))}
      </div>
    </div>
  );
}
