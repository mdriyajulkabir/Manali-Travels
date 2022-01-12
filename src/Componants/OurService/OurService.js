import React from "react";
import "./OurService.css";
const OurService = () => {
  return (
    <>
      <div className="my-5 service-container">
        <h1 className="fw-bolder text-center pt-2">𝐎𝐔𝐑 𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒</h1>
        <div className=" service-line-container">
          <span className="service-line"></span>
        </div>
        <div className=" service-line-container2">
          <span className="service-line2"></span>
        </div>
        <p className="text-center">
          A travel agency is a private retailer or public service that provides
          travel and tourism-related <br /> services to the general public on
          behalf of accommodation or travel suppliers <br /> to offer different
          kinds of travelling packages for each destination.{" "}
        </p>
        <div className="row container mx-auto">
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <i class="fas fa-tint"></i>
              <i class="fas fa-subway"></i>
            <h4 className="text-center">Rail Booking</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            
              <i class="fas fa-tint"></i>
              <i class="fas fa-bed"></i>
            
            <h4 className="text-center">Hotel Booking</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <i class="fas fa-tint"></i>
              <i class="fas fa-plane"></i>
            <h4 className="text-center">Flight Booking</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <i class="fas fa-tint"></i>
          <i class="fas fa-ticket-alt"></i>
            <h4 className="text-center">Ticket Booking</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center"> <i class="fas fa-tint"></i>
              <i class="fas fa-ship"></i>
            <h4 className="text-center">Cruises Booking</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p></div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <i class="fas fa-tint"></i>
              <i class="fas fa-home"></i>
            <h4 className="text-center"> Amazing Tour</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
