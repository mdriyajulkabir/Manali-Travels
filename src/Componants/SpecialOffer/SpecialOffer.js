import React from "react";
import "./SpecialOffer.css";
import offerOne from "../../Image/offer1.jpg";
import offerTwo from "../../Image/offer2.jpg";
import offerThree from "../../Image/offer3.jpg";
const SpecialOffer = () => {
  return (
    <>
      <div className="my-5 py-5">
        <div
          className="d-flex justify-content-center"
          style={{ color: "#f56960" }}>
          <hr className="specialOffer-hr" />
          <h5>ᴛʀᴀᴠᴇʟ ᴏғғᴇʀ & ᴅɪsᴄᴏᴜɴᴛ</h5>
        </div>
        <h1 className="specialOffer-header">𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐓𝐑𝐀𝐕𝐄𝐋 𝐎𝐅𝐅𝐄𝐑</h1>
        <p className="text-center">
          Mollit voluptatem perspiciatis convallis elementum corporis quo
          veritatis aliquid blandit, blandit torquent,
          <br /> odit placeat. Adipiscing repudiandae eius cursus? Nostrum
          magnis maxime curae placeat.
        </p>
        <div className="row w-100 mx-auto container">
          <div className="col-lg-4 col-md-4 col-sm-12 offer-card-body">
            <br /> 
            <img src={offerOne} className="img-fluid px-3" alt="" />
            <div className="p-3 w-75 shadow bg-body offer-card-text">
              <h5>ᴄᴀɴᴀᴅᴀ</h5>
              <h4>E͏x͏p͏e͏r͏i͏e͏n͏c͏e͏ t͏h͏e͏ n͏a͏t͏u͏r͏a͏l͏ b͏e͏a͏u͏t͏y͏ o͏f͏ g͏l͏a͏c͏i͏e͏r͏</h4>
              <p> 𝐏𝐫𝐢𝐜𝐞: <del>$౹Ƽ੦੦</del> $౹੨੦੦</p>
            </div>
            <div className="offer-off rounded-circle shadow">
              <h5>੨੦% <br /> off</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 offer-card-body">
            <br />
            <img src={offerTwo} className="img-fluid px-3" alt="" />
            <div className="p-3 w-75 shadow bg-body offer-card-text">
              <h5>ɴᴇᴡ ᴢᴇᴀʟᴀɴᴅ</h5>
              <h4>T͏r͏e͏k͏k͏i͏n͏g͏ t͏o͏ t͏h͏e͏ m͏o͏u͏n͏t͏a͏i͏n͏ c͏a͏m͏p͏ s͏i͏t͏e͏ beauty</h4>
              <p> 𝐏𝐫𝐢𝐜𝐞: <del>$౹੩੦੦</del> $౹౹੦Ƽ</p>
            </div>
            <div className="offer-off rounded-circle shadow">
              <h5>੨੦% <br /> off</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 offer-card-body">
            <br />
            <img src={offerThree} className="img-fluid px-3" alt="" />
            <div className="p-3 w-75 shadow bg-body offer-card-text">
              <h5>ᴍᴀʟᴀʏᴤɪᴀ</h5>
              <h4>S͏u͏n͏s͏e͏t͏ v͏i͏e͏w͏ o͏f͏ b͏e͏a͏u͏t͏i͏f͏u͏l͏ l͏a͏k͏e͏s͏i͏d͏e͏ c͏i͏t͏y͏</h4>
              <p> 𝐏𝐫𝐢𝐜𝐞: <del>$౹Ƽ੦੦</del> $౹੨੦੦</p>
            </div>
            <div className="offer-off rounded-circle shadow">
              <h5>੨੦% <br /> off</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
