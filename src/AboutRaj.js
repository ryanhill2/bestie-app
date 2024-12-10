import React from 'react';
import './AboutRaj.css';

const AboutRaj = () => {
    return (
        <div className="about-raj">
            <div className="message-container">
                <p><strong>Raj Loves stealing rice from her mum & dad</strong></p>
                <img src={`${process.env.PUBLIC_URL}/raj-rice.png`} alt="Raj Rice" />
            </div>
        </div>
    );
};

export default AboutRaj;