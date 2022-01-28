import React from 'react';
import "./about.css"
import Navigation from './Navigation';
export default function () {
    return <div>
<Navigation/>
        <div className='ownerPic'>
            <img  className="ownerImage" src="./simone.jpg" alt="owners image"/>
            <h6>CEO:Khalilah Anthony</h6>
           
        </div>
        <div className='pWrapper'>
        <div className='pContainer'> 
            <p>
                <p className='businessName'>Simone Cleaning Services LLC.</p>  Is a leading provider of Commercial and Residential Cleaning services. Our experience in successful partnerships with firms in the industry means that we understand the challenges you face in your business, and we deliver products and services to aid you in reaching all of your Specialty Cleaning needs.
               </p>  <div className='leader'>OURLEADER </div>
               <p>
                Our president has 10 years' experience in the Cleaning industry. She is dedicated to upholding our company values and delivering the greatest possible experience to our partners and clients.

            </p>
        </div>
        </div>

    </div>;
}
