import React from 'react'
import LandingPage from './images/Landing-Page.jpg';
import Banner from './images/Banner-3.jpg';
import ThankYou from './images/t.jpg';
import './contact-style.css';

function importAll(r){
    return r.keys().map(r);
}

const LinkedInFeed=importAll(require.context('./images/Follow Us/Linkedin/',false,/\.(svg|png|jpe?g|svg|jpg)$/));
const FacebookFeed=importAll(require.context('./images/Follow Us/Facebook/',false,/\.(svg|png|jpe?g|svg|jpg)$/));
const InstagramFeed=importAll(require.context('./images/Follow Us/Instagram/',false,/\.(svg|png|jpe?g|svg|jpg)$/));

export default function Contact() {
  return (
    <>
      <section class="page-section bg-dark-alfa-50 bg-scroll" style={{backgroundImage: `url(${LandingPage})`}} >
            <div class="containers relative">
                <div class="row">
                    <div class="col-md-8">
                        <div class="wow fadeInUpShort" data-wow-delay=".1s">
                            <h1 class="hs-line-7 mb-20 mb-xs-10">GET IN TOUCH! </h1>
                        </div>

                        <div class="wow fadeInUpShort" data-wow-delay=".2s">
                            <p class="hs-line-6 mb-20 mb-xs-0">
                                WE'D LOVE TO HEAR FROM YOU
                            </p>
                        </div>
                    </div>
                </div>
        
            </div>
        </section>




        <div class="select" style={{backgroundImage: `url(${Banner})`}}>
            <h1>CONTACT US</h1>
        </div>



    
        <section class="page-section2">
            <div class="container relative">
                <div class="row mb-60 mb-xs-40">
                    <div class="col-md-12 offset-md-1">
                        <div class="row">
                            <div class="col-sm-6 col-lg-4 pb-20">
                                <div class="contact-item wow fadeScaleIn" data-wow-delay="0" data-wow-duration="1s">
                                    <div class="ci-icon">
                                        <i class="fa fa-phone"></i>
                                    </div>

                                    <div class="ci-title">
                                       Call Us 
                                    </div>

                                    <div class="ci-text">
                                        +91 9108282102 <br/>
                                        +91 9108282105
                                    </div>
                                </div>
                            </div>
                                   
                            <div class="col-sm-6 col-lg-4 pb-20">
                                <div class="contact-item wow fadeScaleIn" data-wow-delay=".1s" data-wow-duration="1s">
                                    <div class="ci-icon">
                                        <i class="fa fa-map-marker"></i>
                                    </div>

                                    <div class="ci-title">
                                        Address
                                    </div>

                                    <div class="ci-text">
                                        Bengaluru , KA , INDIA
                                    </div>

                                    <div class="ci-link">
                                        <a href="https://goo.gl/maps/zorjcmnB9yGuGqQC7" target="_blank" rel="noreferrer">See on the Map</a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div class="col-sm-6 col-lg-4 pb-20">
                                <div class="contact-item wow fadeScaleIn" data-wow-delay=".2s" data-wow-duration="1s">
                                    <div class="ci-icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>

                                    <div class="ci-title">
                                        Email
                                    </div>

                                    <div class="ci-text">
                                        {/* <!-- <a href="https://rhythm.bestlooker.pro/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ec9f999c9c839e98ac8e899f9880838387899ec29c9e83">Arthaambulance@gmail.com</a> --> */}
                                        <a href="mailto:info@arthaambulance.com">info@arthaambulance.com</a>
                                    </div>

                                    <div class="ci-link">
                                        {/* <!-- <a href="https://rhythm.bestlooker.pro/cdn-cgi/l/email-protection#e0939590908f9294a0828593948c8f8f8b8592ce90928f">Say Hello</a> --> */}
                                        <a href="mailto:info@arthaambulance.com">Say Hello</a>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>      
                </div>
            </div>
        </section>





        <div class="selecting" style={{backgroundImage: `url(${Banner})`}}>  
            <h1>FOLLOW US</h1>
        </div>




                       
        <div class="follow">            
            <div class="widget gallery-widget">
                <h1 class="header-widget">Instagram Feed</h1>

                <ul>
                    {
                        InstagramFeed.map(image =>{
                            return <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src={image.default} alt="Instagram Image1" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                        })
                    }
                    {/* <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Ambulance Sirens.jpg" alt="Instagram Image1" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Doc in Ambulance.jpg" alt="Instagram Image2" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Doc in OT.jpg" alt="Instagram Image3" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Heart on a book.jpg" alt="Instagram Image4" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Inside Ambulance.jpg" alt="Instagram Image5" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.instagram.com/artha_ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/IV Bag 2.jpg" alt="Instagram Image6" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li> */}
                </ul>
            </div>

            <div class="widget twitter-widget">
                <h1 class="header-widget">Twitter Feed</h1>
                <ul>
                    <li>
                        <a href="https://twitter.com/AmbulanceArtha" target="_blank" class="twitter" rel="noreferrer"><i class="fa fa-twitter"></i><p>The best investment you will ever make is on your health</p></a>
                        {/* <!-- <p>5 Reasons You Should Take a Sabbatical from Creative Work  <span>- AUG 10</span></p> --> */}
                    </li>

                    <li>
                        <a href="https://twitter.com/AmbulanceArtha" target="_blank" class="twitter" rel="noreferrer"><i class="fa fa-twitter"></i><p>We are just a phone call away</p></a>
                        {/* <!-- <p>What is the enemy of  <span>- AUG 5</span></p> --> */}
                        </li>
                    </ul>
            </div>

            <div class="widget gallery-widget">
                <h1 class="header-widget">LinkedIn Feed</h1>

                <ul>
                    {
                        LinkedInFeed.map(image=>{
                            return <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src={image.default} alt="linkedin" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                        })
                    }
                    {/* <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/IV Bag.jpg" alt="LinkedIn Image1" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Mask and Sanitizer.jpg" alt="LinkedIn Image2" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/medical-staff-with-stethoscope.jpg" alt="LinkedIn Image3" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/medical-test.jpg" alt="LinkedIn Image4" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Monitor.jpg" alt="LinkedIn Image5" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.linkedin.com/company/artha-ambulance/" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Oxygen Mask.jpg" alt="LinkedIn Image6" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li> */}
                </ul>
            </div>

            <div class="widget gallery-widget">
                <h1 class="header-widget">Facebook Feed</h1>

                <ul>
                    {
                        FacebookFeed.map(image=>{
                            return <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src={image.default} alt="Facebook Image1" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                        })
                    }
                    {/* <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="./images/Follow Us/Paramedics are always there to help.jpg" alt="Facebook Image1" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="./images/Follow Us/Plus Sign.jpg" alt="Facebook Image2" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="./images/Follow Us/Rushing Ambulance.jpg" alt="Facebook Image3" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Side Stand.jpg" alt="Facebook Image4" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Stay home.jpg" alt="Facebook Image5" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li>
                    <li><a href="https://www.facebook.com/Arthaambulance" class="gallery-widget-lightbox" target="_blank" rel="noreferrer"><img src="images/Follow Us/Stethoscope - 2.jpg" alt="Facebook Image6" /><div class="hover-link"><span class="linea-arrows-plus"></span></div></a></li> */}
                </ul>
            </div>
        </div>





        <div class="selecting" style={{backgroundImage: `url(${Banner})`}}>  
            <h1>TELL US</h1>
        </div>





        <form>
            <div class="tell">
                <div class="us">
                    <div class="form-group">
                        <label for="name">Name <sup>*</sup></label>
                        <br />
                        <input type="text" name="name" id="name" class="input-lg round form-control"  required aria-required="true" />
                    </div>

                    <div class="form-group">
                        <label for="email">Email <sup>*</sup></label>
                        <br />
                        <input type="email" name="email" id="email" class="input-lg round form-control"  required aria-required="true" />
                    </div>

                    <div class="form-group">
                        <label for="number">Phone <sup>*</sup></label>
                        <br />
                        <input type="number" name="number" id="number" class="input-lg round form-control"   required aria-required="true" />
                    </div>

                    <div class="form-group">
                        <label for="message">Message <sup>*</sup></label>
                        <br />
                        <textarea name="message" id="message" class="input-lg round form-control" style={{height: "130px"}} ></textarea>
                    </div>

                    <div class="text-end pt-10">
                        <button class="submit_btn btn btn-mod btn-large btn-round" id="submit_btn" aria-controls="result">
                            Submit
                        </button>
                    </div>
                </div>
                
                <div class="usimg">
                    <img src={ThankYou} alt="image0"/>
                </div>
            </div>
        </form>


              

        <div class="selecting headquarter" style={{backgroundImage: `url(${Banner})`}}>  
            <h1>Company Headquarters</h1>
        </div>



        <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31116.323207680332!2d77.5862605554176!3d12.872934456202312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ad428686a95%3A0x9f834702fb64489e!2sHulimavu%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1636726787598!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" title="mapas" loading="lazy"></iframe>
        </div>
    </>
  );
}
