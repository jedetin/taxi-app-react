import React from "react";

const Footer = () => {
    return (
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', bottom:0, }}>
            <span className="text-muted">© 2022 All Rights Reserved.  </span> 
            &nbsp; <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                BitCab 
            </a>  &mdash; Bid on Cabs and Taxi Rides
        </div>
    )
}

export default Footer;