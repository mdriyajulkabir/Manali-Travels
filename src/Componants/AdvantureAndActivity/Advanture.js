import React from 'react';
import './Advanture.css'
import adventure from '../../Image/adventure.png'
import trekking from '../../Image/bag.png'
import fire from '../../Image/fire.png'
import offroad from '../../Image/offroad.png'
import home from '../../Image/home.png'
import explore from '../../Image/icon6.png'
const Advanture = () => {
    return (
        <>
            <div className='my-5'>
                <div className='d-flex justify-content-center' style={{color: '#f56960'}}>
                    <hr  className='adventure-hr'/>
                    <h5>ᴛʀᴀᴠᴇʟ ʙʏ ᴀᴄᴛɪᴠɪᴛʏ</h5>
                </div>
                <h1 className='adventure-header'>ADVENTURE & ACTIVITY</h1>
                <p className='text-center '>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, <br /> odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                <div className="row w-100 container mx-auto my-5">
                    <div className="col-lg-2 col-md-4 col-sm-12 ">
                        <div className='adventure-div'>
                        <img src={adventure} className='' alt="" />
                        <h5>Adventure</h5>
                        <p>15 Destination</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="adventure-div">
                        <img src={trekking} alt="" />
                        <h5>Trekking</h5>
                        <p>12 Destination</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="adventure-div">
                        <img src={fire} alt="" />
                        <h5>Camp Fire</h5>
                        <p>7 Destination</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                       <div className='adventure-div'>
                       <img src={offroad} alt="" />
                        <h5>Off Road</h5>
                        <p>15 Destination</p>
                       </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className='adventure-div'>
                        <img src={home} alt="" />
                        <h5>Camping</h5>
                        <p>13 Destination</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="adventure-div">
                        <img src={explore} alt="" />
                        <h5>Exploring</h5>
                        <p>25 Destination</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Advanture;