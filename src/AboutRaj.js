import React, { useState } from 'react';
import './AboutRaj.css';

const AboutRaj = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showEvenMore, setShowEvenMore] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    const handleMoreClick = () => {
        setShowMore(true);
    };

    const handleEvenMoreClick = () => {
        setShowEvenMore(true);
    };

    return (
        <div className="about-raj">
            {!showMessage && (
                <button className="learn-more-button" onClick={handleClick}>Start learning about Raj</button>
            )}
            {showMessage && !showMore && (
                <div className="message-container">
                    <p><strong>Raj Loves stealing rice from her mum & dad</strong></p>
                    <div className="center-button">
                        <button className="tell-more-button" onClick={handleMoreClick}>Tell me more</button>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/raj-rice.png`} alt="Raj Rice" />
                </div>
            )}
            {showMore && !showEvenMore && (
                <div className="message-container">
                    <p>Raj likes painting bears</p>
                    <div className="center-button">
                        <button className="tell-more-button" onClick={handleEvenMoreClick}>Tell me even more</button>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/raj-painting.png`} alt="Raj Painting"/>
                </div>
            )}
            {showEvenMore && (
                <div className="message-container">
                    <p>Raj enjoys making hot chocolate with extra love</p>
                    <img src={`${process.env.PUBLIC_URL}/raj-hot-chocolate.png`} alt="Raj Painting" />
                </div>
            )}
        </div>
    );
};

export default AboutRaj;