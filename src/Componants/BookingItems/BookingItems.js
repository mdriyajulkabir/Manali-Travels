import React, { useState } from "react";
import "./BookingItems.css";
const BookingItems = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="nav-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Hotels
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Flights
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          Cars
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className="row  mx-auto">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h4>Where</h4>
              <p>Your Destination</p>
              <input
                type="text"
                placeholder="Enter a destination or hotel name"
                className="w-100 ps-3"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <h4>When</h4>
              <div className="row">
                <div className="col-6">
                  <p>CHECK IN</p>
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className="w-100 ps-3"
                  />
                </div>
                <div className="col-6">
                  <p>CHECK OUT</p>
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6">
              <h4>Who</h4>
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>ROOMS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>ADULTS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>KIDS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-5 col-md-4 col-sm-6">
                  <br />
                  <button className="booking-button w-100 px-2 py-1 ">
                    SEARCH NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className="row  mx-auto">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h4>Where</h4>
              <p>LEAVING FROM</p>
              <input
                type="text"
                placeholder="City,District or specific airpot"
                className="w-100 ps-3"
              />

              <p className="mt-3">GOING TO</p>
              <input
                type="text"
                placeholder="City,District or Specific Airpot"
                className="w-100 ps-3"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <h4>When</h4>
              <p>DEPARTING ON</p>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className="w-100 ps-3"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="ANYTIME"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
              <p className="mt-3">DEPARTING ON</p>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className="w-100 ps-3"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="ANYTIME"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6">
              <h4>Who</h4>
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>INFANTS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>ADULTS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>KIDS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-5 col-md-4 col-sm-6">
                  <br />
                  <button className="booking-button w-100 px-2 py-1 ">
                    SEARCH NOW
                  </button>
                </div>
              </div>
              <p className="mt-3">PROMO CODE</p>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
          <div className="row w-100  mx-auto">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h4>Where</h4>
              <p>PICK UP</p>
              <input
                type="text"
                placeholder="City,District or Specific Airpot"
                className="w-100 ps-3"
              />

              <p className="mt-3">DROP OFF</p>
              <input
                type="text"
                placeholder="City,District or Specific Airpot"
                className="w-100 ps-3"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <h4>When</h4>
              <p>PICK-UP DATE/TIME</p>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className="w-100 ps-3"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="ANYTIME"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
              <p className="mt-3">DROP-OFF DATE/TIME</p>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className="w-100 ps-3"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="ANYTIME"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6">
              <h4>Who</h4>
              <div className="row w-100">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>ADULTS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <p>KIDS</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <p>CAR TYPES</p>
                  <input type="text" placeholder="01" className="w-100 ps-3" />
                </div>
                <div className="col-lg-5 col-md-4 col-sm-6">
                  <br />
                  <button className="booking-button w-100 px-2 py-1 ">
                    SEARCH NOW
                  </button>
                </div>
              </div>
              <p className="mt-3">PROMO CODE</p>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="w-100 ps-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingItems;
