import Cargo from "./assets/Air Cargo Clearance.jpg";
import Coffin from "./assets/Coffin box1.jpg";
import Embalming from "./assets/Embalming.jpg";
import Freezer from "./assets/freezer.jpg";
import Funeral from "./assets/Funeral Services.jpg";

import "./service.css";
import "./animate.css";

export default function Services() {
  return (
    <>
      <div
        class="
        container-background landing d-flex align-items-center justify-content-center"
      >
        <h1 class="heading">OUR SERVICES</h1>
      </div>
      <div
        class="container-fluid mt-2"
        c2
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div class="row p-0 row1">
          <div class="col-md-6 col-sm-6">
            <h1 class="heads text-left mb-1" style={{ color: "black" }}>
              FREEZER BOX
            </h1>
            <p class="paragraph ml-3">
              In the worst case of death, a freezer box is used to preserve the
              dead body from decomposing for a few days. You can use these
              freezer boxes to transport the dead bodies via air, road and
              train. The upper part of the box will be made of glass, so that
              the body of the deceased can be viewed by others.
            </p>
          </div>
          <div class="col-md-6 col-sm-6 imgcont">
            <section class="scroll-container">
              <div class="outer">
                <div class="scroll-element js-scroll fade-in">
                  <div class="inner">
                    <img
                      class="img-fluid one animate"
                      id="image"
                      src={Freezer}
                      alt="freezer box"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="row row1">
          <div class="col-md-6 col-sm-6 imgcont">
            <section class="scroll-container">
              <div class="outer">
                <div class="scroll-element js-scroll fade-in">
                  <div class="inner">
                    <img
                      class="img-fluid one animate"
                      id="image"
                      src={Coffin}
                      alt="Coffin box"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-6 col-sm-6">
            <h1 class="heads text-left mt-3 mb-1" style={{ color: "black" }}>
              COFFIN BOX
            </h1>
            <p class="paragraph ml-3">
              We provide Coffin Boxes (funerary box) used for viewing or keeping
              a corpse, either for burial or cremation. The coffin boxes provide
              a protective environment that helps to protect and preserve the
              body, preventing moisture and bacteria from reaching the body and
              accelerating its decomposition.
            </p>
          </div>
        </div>
        <div class="row row1">
          <div class="col-md-6 col-sm-6">
            <h1 class="heads text-left mt-3 mb-1" style={{ color: "black" }}>
              EMBALMING
            </h1>
            <p class="paragraph ml-3">
              The embalming service we offer will ensure that the body remains
              in its original form without any decomposition or any foul odors
              for a few days. Embalming keeps the body in a hygienic condition
              and suitable for public or private viewing as part of the funeral
              ceremony. Embalming will also help to facilitate the transport of
              the body via air, road or train.
            </p>
          </div>
          <div class="col-md-6 col-sm-6 imgcont">
            <section class="scroll-container">
              <div class="outer">
                <div class="scroll-element js-scroll fade-in">
                  <div class="inner">
                    <img
                      class="img-fluid one animate"
                      id="image"
                      src={Embalming}
                      alt="Coffin box"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="row row1">
          <div class="col-md-6 col-sm-6 imgcont">
            <section class="scroll-container">
              <div class="outer">
                <div class="scroll-element js-scroll fade-in">
                  <div class="inner">
                    <img
                      class="img-fluid one animate"
                      id="image"
                      src={Funeral}
                      alt="Coffin box"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-6 col-sm-6">
            <h1 class="heads text-left mt-3" style={{ color: "black" }}>
              FUNERAL SERVICES
            </h1>
            <p class="paragraph ml-3">
              Our funeral services include funeral planning, securing the
              necessary permits, preparing the notices, sheltering the remains,
              and coordinating the arrangements with the cemetery, crematory or
              other third parties.The funeral of your beloved one is a very
              important service and the same has to be performed with dignity as
              it is a farewell for the last time to your loved ones.
            </p>
          </div>
        </div>
        <div class="row row1">
          <div class="col-md-6 col-sm-6">
            <h1 class="heads text-left mt-3 mb-1" style={{ color: "black" }}>
              AIR CARGO CLEARANCE
            </h1>
            <p class="paragraph ml-3">
              To transport a deceased from one state to another by flight, you
              shall require a death certificate from the hospital, NOC from the
              local police, Coffin Box Certificate, Embalming Certificate, Govt
              issued photo ID card. We help in obtaining the necessary permits
              required for domestic and international cargo clearance.
            </p>
          </div>
          <div class="col-md-6 col-sm-6 imgcont">
            <section class="scroll-container">
              <div class="outer">
                <div class="scroll-element js-scroll fade-in">
                  <div class="inner">
                    <img
                      class="img-fluid one animate"
                      id="image"
                      src={Cargo}
                      alt="Air Cargo"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
