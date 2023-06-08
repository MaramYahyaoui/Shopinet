import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Colors } from '../styles/themes';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TuneIcon from '@mui/icons-material/Tune';

export default function Quality() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const qualityData = [
    {
      title: 'Qualité exceptionnelle ',
      description: 'On assure un haute qualité du produit',
      icon: <CheckCircleOutlineIcon
              fontSize="large"
              style={{ color: hoveredIndex === 0 ? 'white' : Colors.danger }}
            />,
    },
    {
      title: 'Taille et style personnalisés',
      description: 'produits personnalisées et spécifique a vos besoins',
      icon: <TuneIcon
              fontSize="large"
              style={{ color: hoveredIndex === 1 ? 'white' : Colors.danger }}
            />,
    },
    {
      title: 'Services haute vitesse',
      description: 'Service disponible a tout moments avec une livraison rapide ',
      icon: <CheckCircleOutlineIcon
              fontSize="large"
              style={{ color: hoveredIndex === 2 ? 'white' : Colors.danger }}
            />,
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {qualityData.map((data, index) => (
        <Box
          key={index}
          sx={{
            width: '260px',
            height: '180px',
            backgroundColor: hoveredIndex === index ? Colors.danger : 'white',
            borderRadius: '8px',
            boxShadow: hoveredIndex === index ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
            textAlign: 'center',
            color: hoveredIndex === index ? 'white' : 'black',
            marginRight: '60px',
            marginLeft:'60px',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {data.icon}
          <h3>{data.title}</h3>
          <p style={{ fontSize: 12 }}>{data.description}</p>
        </Box>
      ))}
    </div>
  );
}
