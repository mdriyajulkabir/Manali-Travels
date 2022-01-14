import React from 'react';
import logo from '../../Image/logo.png'
import award1 from '../../Image/award1.png'
import award2 from '../../Image/award2.png'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className="row w-100 container mx-auto py-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
<img src={logo} alt="" />
<h4 className='text-light'>Choose your dream Destination for tour with Manali</h4>
<div className='d-fle'>
    <img src={award1} className='img-fluid' alt="" />
    <img src={award2}className='img-fluid'  alt="" />
</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className='text-light footer-header'>CONTACT INFO</h5>
                        <p>We are always at your service when you need. We are trying our best to give you.</p>
                        <p><i class="fas fa-map-marker-alt"> &nbsp;</i> 3146 Koontz, California</p>
                        <p><i class="fas fa-phone-square-alt"></i> &nbsp; +01 (977) 2599 12</p>
                        <p><i class="fas fa-paper-plane"></i> &nbsp; mdriyajulkabir@gmail.com</p>
                        <p><i class="fas fa-fax"></i> &nbsp; Fax: 02 9245 2158</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <h5 className='text-light footer-header'>QUICK LINKS</h5>
                    <p>{'>'}&gt; &nbsp; About Us </p>
                    <p>{'>'}&gt; &nbsp; Tours </p>
                    <p>{'>'}&gt; &nbsp; Gallery </p>
                    <p>{'>'}&gt; &nbsp; Contact Us </p>
                    <p>{'>'}&gt; &nbsp; Blogs </p>
                    <p>{'>'}&gt; &nbsp; Privacy Policy </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                    <h5 className='text-light footer-header'>LATEST POST</h5>
                    <p>Life is a beautiful journey not a destination</p>
                    <div className='d-flex justify-content-between'>
                        <p>August 17, 2017</p>
                        <p className='post'>No Comments</p>
                    </div>
                    <hr className='footer-hr' />
                    <p>Life is a beautiful journey not a destination</p>
                    <div className='d-flex justify-content-between'>
                        <p>August 17, 2017</p>
                        <p className='post'>No Comments</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;