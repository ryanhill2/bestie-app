import React, { useState } from 'react';
import './AboutRaj.css';

const AboutRaj = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (
        <div className="about-raj">
            {!showMessage && (
                <button className="learn-more-button" onClick={handleClick}>Start learning about Raj</button>
            )}
            {showMessage && (
                <div className="message-container">
                    <p><strong>Raj Loves stealing rice from her mum & dad</strong></p>
                    <img src={`${process.env.PUBLIC_URL}/raj-rice.png`} alt="Raj Rice" />
                </div>
            )}
        </div>
    );
};

export default AboutRaj;