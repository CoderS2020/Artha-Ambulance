import React from 'react';
import WhoImg1 from './assets/Who-Img1.jpg';
import WhoImg2 from './assets/Who-Img2.jpg';
import WhoImg3 from './assets/Who-Img3.jpg';
import cm2 from './assets/cm2.jpg';
import LandingPage from './assets/Landing-Page.jpg';
import Banner3 from './assets/Banner-3.jpg';
import '../About/about.css';

const About = () => {
  return (
    <>
      <section
        class="page-section bg-dark-alfa-50 bg-scroll"
        style={{ backgroundImage: `url(${LandingPage})` }}
      >
        <div class="containers relative">
          <div class="row">
            <div class="col-md-8">
              <div class="wow fadeInUpShort" data-wow-delay=".2s">
                <h1 class="hs-line-7  mb-20 mb-xs-0 ">A LITTLE ABOUT US!</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="select" style={{ background: `url(${Banner3})` }}>
        <h1> WHO ARE WE?</h1>
      </div>

      {/* who are we Section  */}

      <div class="container relative">
        <div class="rowi section-text">
          <div class="col-lg-4 imgcont">
            <img src={WhoImg1} class="who1" alt=" " />
            <p>
              {' '}
              We at Artha Ambulance Services provide utmost care to all the
              citizens of the country. Currently, we are based in Bengaluru and
              are dedicating ourselves to provide ambulance services to all of
              the people residing in Karnataka.
            </p>
          </div>

          <div class="col-lg-4 imgcont">
            <img src={WhoImg2} alt=" " />
            <p>
              {' '}
              We understand how fatal an accident or an emergency at your place
              can be for you. We will be there next to you as a helping hand to
              support you in that distress situation. You can count on us during
              your emergencies and leave the rest to us.
            </p>
          </div>

          <div class="col-lg-4 imgcont">
            <img src={WhoImg3} alt="  " />
            <p>
              {' '}
              Our ambulances are fully equipped with leading-edge medical
              equipment to serve during emergencies. Our team works 24/7 to
              provide quick and safe services throughout the year.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- END who are we Section --> */}

      <div class="select" style={{ background: `url(${Banner3})` }}>
        <h1>WHAT DO WE PROVIDE?</h1>
      </div>

      {/* <!-- what we do Section --> */}
      <div class="rowi">
        <div class="container ft-steps-numbers">
          <div class="row section">
            <div class="num">
              <div class="service ft-item">
                <span class="ft-nbr">01</span>
                <h1>Reliable Staff</h1>
                <p>
                  Our Staff are completely reliable when it comes to emergencies
                  as they are trained to handle the situation carefully.
                </p>
              </div>

              <div class=" service ft-item">
                <span class="ft-nbr ">02</span>
                <h1>Professional Expertise </h1>
                <p>
                  We hire only the best. Our drivers, doctors and nurses are all
                  professionals and will make sure to take good care of you.
                </p>
              </div>

              <div class="service ft-item">
                <span class="ft-nbr">03</span>
                <h1>Speedy response</h1>
                <p>
                  During Emergencies, our ambulances will reach you
                  approximately within a duration of 15 - 30 minutes.
                </p>
              </div>
              <div class="service ft-item">
                <span class="ft-nbr">04</span>
                <h1>Exceptional quality and reasonable prices</h1>
                <p>
                  Our equipments fitted in the ambulance are of high quality and
                  we charge reasonable prices for everyone.
                </p>
              </div>

              <div class="service ft-item">
                <span class="ft-nbr ">05</span>
                <h1>Vast network base </h1>
                <p>
                  We have a network of hospitals, ambulances and doctors who are
                  prepared to help us during critical emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END what we do Section --> */}

      <div class="select" style={{ background: `url(${Banner3})` }}>
        <h1>OUR COMMITMENT</h1>
      </div>
      <section class="page-sectionn">
            <div class="containerr relativee">
                <div class="rowi ours">
                    <div class="cr">
                        <p> To provide exceptional emergency medical services to all those who need our medical care with utmost loyalty and responsibility towards saving lives. 
                            Our priority is always given to people who are in critical emergencies.
                            Our staff members will be aware about your situation and will always support during emergencies to the greatest possible extent. 
                            We ensure that the patient's condition is observed and taken care of throughout the medical transport journey. 
                        </p>
                        
                        <p> We always try to succeed by providing high-quality service along with safety to all those people who choose our service. 
                            We care for our patients and always treat them and their families with respect and care.We will serve society and people with greater importance and care. 
                            Our mission is to rescue maximum lives around us and treat them with respect and empathy.
                        </p>
                    </div>

                          
                    <div class="call-action-3-images mt-xs-0 text-end">
                        <section class="scroll-container">
                          <div class="outer">
                              <div class="scroll-element js-scroll fade-in">
                                  <div class="inner">
                                      <img src={cm2} alt="animate" class="animate" />
                                  </div>
                              </div>
                          </div>
                        </section>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default About;
