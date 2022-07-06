import React from "react";

const Footer = () => {
    return (
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', bottom:0, }}>
            © 2022 Copyright  | 
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                &nbsp; BitCab &mdash;
            </a> Bid on Cabs and Taxi Rides
        </div>
    )
}

export default Footer;