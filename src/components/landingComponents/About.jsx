import { PiLineVerticalThin } from "react-icons/pi";

import NavBar from './NavBar';

function About() {

  return (

    <>

      <NavBar />

      <div className="container-fluid about-section py-5">

        <div className="row justify-content-center">

          {/* Left Column */}

          <div className="col-12 col-md-6 mb-4">

            <div className="property-details px-4 py-3 bg-white rounded shadow-sm h-100">

              <button className="about-button mb-3">About Us</button>

              <h2>Today Sells Properties</h2>

              <p>

                Houzee allows you to design unlimited panels and real estate custom

                forms to capture leads and keep record of all information.

              </p>

              <ul className="list-unstyled mt-3">

                <li>✔ Live Music Concerts at Luviana</li>

                <li>✔ Our Secret Island Boat Tour is Just for You</li>

                <li>✔ Live Music Concerts at Luviana</li>

                <li>✔ Live Music Concerts at Luviana</li>

              </ul>

              {/* Property Info Icons */}

              <div className="property-card">

                <div className="property-info">

                  <div className="info-item">

                    <div>3 🛏<br /><small>Bedrooms</small></div>

                  </div>

                  <div className="info-item">

                    <div>2 🛁<br /><small>Bathrooms</small></div>

                  </div>

                  <div className="info-item">

                    <div>2 🚗<br /><small>Car parking</small></div>

                  </div>

                  <div className="info-item">

                    <div>3450 📐<br /><small>Square Ft</small></div>

                  </div>

                </div>

                {/* Images Row */}

                <div className="property-images mt-3">

                  <img className="imgstyle" src="/img/about8.jpg" alt="House" />

                  <img className="imgstyle"  src="/img/about10.jpg" alt="Balcony" />

                  <img className="imgstyle"  src="/img/about5.jpg" alt="Living Room" />

                </div>

              </div>

            </div>

          </div>

          {/* Right Column - Collage Images */}

          <div className="col-12 col-md-6">

            <div className="collage-container">

              <div className="right-photos">

                <img className="imgstyle" src="/img/about1.jpg" alt="Interior Design" />

                <img className="imgstyle" src="/img/about2.jpg"alt="Dining Table" />

              </div>

              <div className="right-photos">

                <img className="imgstyle" src="/img/about10.jpg" alt="Interior Design" />

                <img className="imgstyle" src="/img/about6.jpg" alt="Dining Table" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}



export default About;
