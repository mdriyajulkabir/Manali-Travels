import React from "react";
import "./WhyChooseUs.css";
import WhyChooseBanner from "../../Image/why-choose.jpg";
import iconOne from "../../Image/whyIconOne.jpg";
import iconTwo from "../../Image/whyIconTwo.jpg";
import iconThree from "../../Image/whyIconThree.jpg";
const WhyChooseUS = () => {
  return (
    <div>
      <div className="row w-100 px-1">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={WhyChooseBanner} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
         <div>
         <p className="text-center mt-3">
            100% 🇶‌🇺‌🇦‌🇱‌🇮‌🇹‌🇾‌ 🇸‌🇪‌🇷‌🇻‌🇮‌🇨‌🇪‌🇸‌
          </p>
          <h1 className="whyChooseHeader">𝓦𝓱𝔂 𝓒𝓱𝓸𝓸𝓼𝓮 𝓤𝓼?</h1>
          <div className="row my-3">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <img src={iconOne} alt="" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 whyChooseDescription">
              <h3>🇨‌🇺‌🇸‌🇹‌🇴‌🇲‌🇮‌🇿‌🇪‌🇩‌ 🇹‌🇴‌🇺‌🇷‌🇸‌</h3>
              <p>
                Lorem Ipsum is simply dummy text the printing typesetting
                industry been standard.
              </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <img src={iconTwo} alt="" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 whyChooseDescription">
              <h3>
                🇲‌🇴‌🇷‌🇪‌ 🇸‌🇦‌🇫‌🇪‌🇹‌🇾‌ & 🇪‌🇳‌🇯‌🇴‌🇾‌🇦‌🇧‌🇱‌🇪‌
              </h3>
              <p>
                Lorem Ipsum is simply dummy text the printing typesetting
                industry been standard.
              </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <img src={iconThree} alt="" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 whyChooseDescription">
              <h3>🇼‌🇴‌🇷‌🇱‌🇩‌ 🇼‌🇮‌🇩‌🇪‌ 🇨‌🇴‌🇳‌🇳‌🇪‌🇨‌🇹‌🇪‌🇩‌</h3>
              <p>
                Lorem Ipsum is simply dummy text the printing typesetting
                industry been standard.
              </p>
            </div>
          </div>
         </div>
        </div>
      </div>

      <div className="row mt-5 mx-4">
        <div className="detail col-lg-4 col-md-4 col-sm-12 mb-3">
          <div>
            <p className="fs-3">
              {" "}
              <span className="fw-bolder">Amazing</span> Tours And Fun <br />{" "}
              Adventures{" "}
              <span className="fw-bolder">
                Waiting For <br /> You{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="detail col-lg-4 col-md-4 col-sm-12 mb-3">
          <p className="fs-3">
            Choose The{" "}
            <span className="fw-bolder">
              Destination <br />
              Just Right
            </span>{" "}
            For Your <br /> Vacation
          </p>
        </div>
        <div className="detail col-lg-4 col-md-4 col-sm-12 mb-3">
          <p className="fs-3">
            Special{" "}
            <span className="fw-bolder">
              Deals And <br /> Last Minute
            </span>{" "}
            Amazing <br /> Offers
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
