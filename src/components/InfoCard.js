// src/components/InfoCard.js
import React from 'react';

const InfoCard = ({ icon, title, description, additionalContent, color, textColor }) => {
return (
    <div className="p-6 shadow-md flex flex-col items-center" style={{ backgroundColor: color, color: textColor }}>
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-center mb-4">{description}</p>
        {additionalContent && <div className="mt-2">{additionalContent}</div>}
    </div>
);
};

export default InfoCard;
