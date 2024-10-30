// ProfileCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import linkedinLogo from '../assets/linkedin.svg';

// URL da imagem padrão do LinkedIn
const DEFAULT_LINKEDIN_IMAGE = linkedinLogo;

const ProfileCard = ({ image, name, title, linkedinUrl, linkedinImage = DEFAULT_LINKEDIN_IMAGE }) => {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-2">
            <div className="flex justify-center mt-4">
                <img
                    className="w-24 h-24 rounded-full border-2 border-white shadow-md"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600">{title}</p>
            </div>
            <div className="flex justify-center mt-4 mb-4">
                <a
                    href={linkedinUrl}
                    className="hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={linkedinImage} // Imagem do LinkedIn, usando o padrão se não for passado
                        alt="LinkedIn"
                        className="w-8 h-8"
                    />
                </a>
            </div>
        </div>
    );
};

// Definindo os tipos das props para garantir que os dados corretos sejam passados
ProfileCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkedinUrl: PropTypes.string.isRequired,
    linkedinImage: PropTypes.string, // Opcional agora, pois temos uma imagem padrão
};

export default ProfileCard;
