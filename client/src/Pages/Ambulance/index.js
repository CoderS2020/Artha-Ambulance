import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import LifeSupport from './assets/LifeSupport.jpg';
import AirAmbulance from './assets/AirAmbulance.jpg';
import BasicLifeSupport from './assets/BasicLifeSupport.jpg';
import TransportVechicle from './assets/TransportVehicle.jpg';

import "./animate.css"
import './ambulance.css';

export default function Ambulance() {
  AOS.init()
  return (
    <>
      <div class="landing">
            <h1 class="heading">OUR AMBULANCES</h1>
        </div>
    <div class="container-fluid ">
        <div class="container">
            <div class=" left ">
                <div class=" paragraph">
                    <h2 class="font_8 ">PATIENT TRANSPORT VEHICLE </h2>
                    <p class=" ">The Patient Transport Vehicles are used to transport patients who are in stable condition and do not require much medical attentation. This ambulance helps to transfer patients to and from medical facilities in non-emergency situations
                        and this vehicle can be used for patients who no longer require specialized care (Mainly Stretcher and Wheelchair cases). </p>
                </div>
            </div>
            <div class="right animationcontainer">
                <section class="scroll-container">
                    <div class="outer">
                        <div class="scroll-element js-scroll fade-in">
                            <div class="inner" data-aos="zoom-out" data-aos-duration="2000" data-aos-anchor-easing="ease-out-cubic">
                                
                                <img class="img-fluid one animate" id="image" src={TransportVechicle} width="100%" alt="TransportVechicle"/>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
        <div class="container" >
            <div class="left animationcontainer" >
                <section class="scroll-container">
                    <div class="outer">
                        <div class="scroll-element js-scroll fade-in">
                            <div class="inner" data-aos="zoom-out" data-aos-duration="2000" data-aos-anchor-easing="ease-out-cubic">
                                
                                <img class="img-fluid two " src={BasicLifeSupport} width="100% " alt="BasicLifeSupport" />
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

            <div class=" right ">
                <div class="paragraph ">
                    <h2 class=" font_8 ">BASIC LIFE SUPPORT</h2>
                    <p class="">The Basic Life Support Vehicles are essentially used to provide basic medicle care to those people who are in non-life-threatening situations.They are not equipped to sustain critical emergencies for a prolonged duration. These vehicles
                        are mainly used for patients who need non-emergency medical transportation which includes patient requiring oxygen support or basic treatment including outpatient visits to doctors office or the hospital.</p>
                </div>
            </div>
        </div>

        <div class="container ">
            <div class="left ">
                <div class="paragraph ">
                    <h2 class="font_8 ">ADVANCED LIFE SUPPORT</h2>
                    <p class="">The Advanced Life Support Vehicles are equipped to provide emergency service for urgent prehospital treatement and stabilization during serious emergencies and to transport the patients to definitive care. These ambulances are mainly
                        used treat critical emergencies where there is a need for respiratory support or oxygen support. ALS vehicles are equipped with all the equipments needed for critical emergencies.
                    </p>
                </div>
            </div>
            <div class="right animationcontainer">
                <section class="scroll-container">
                    <div class="outer">
                        <div class="scroll-element js-scroll fade-in">
                            <div class="inner" data-aos="zoom-out" data-aos-duration="2000" data-aos-anchor-easing="ease-out-cubic">
                                
                                <img class="img-fluid three" src={LifeSupport} width="100% " alt="LifeSupport" />
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
        <div class="container">
            <div class="left animationcontainer">
                <section class="scroll-container">
                    <div class="outer">
                        <div class="scroll-element js-scroll fade-in">
                            <div class="inner" data-aos="zoom-out" data-aos-duration="2000" data-aos-anchor-easing="ease-out-cubic">
                                
                                <img class="img-fluid four" src={AirAmbulance} width="100% " alt="AirAmbulance" />
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            <div class=" right">
                <div class="paragraph ">
                    <h2 class=" font_8 ">AIR AMBULANCE </h2>
                    <p class="">We support by dispensing Air ambulance services focused mainly on offering emergency air care services globally. These services are useful in treating emergencires where patients need extremely important medical care which is not within
                        their vicinity. The patients will be transferred from one place to another for better treatement if not available at their place using the Aeromedical evacuation. This service is provided for patients who need a faster mode of
                        transport along with the medical treatment.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
