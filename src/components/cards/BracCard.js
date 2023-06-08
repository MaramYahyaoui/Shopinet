import { Box, Card, CardContent, CardMedia, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Title1, Price } from '../../styles/card/card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function BracCard() {
    const [loadingProducts, setLoadingProducts] = useState(false);

  const [bracelet, setBracelet] = useState({});


  useEffect(() => {
    const fetchBracelet = async () => {
      try {
        setLoadingProducts(true);
        const response = await axios.get(
          'http://localhost:5005/Product/GetAllProductsAccessoires'
        );
        let buffer = [];
        let array = response.data.product.imageList;
        let result = response.data.product;
        buffer = array.map((elem) => JSON.parse(elem));
        result.imageList = buffer;
        setBracelet(result);
        setLoadingProducts(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBracelet(bracelet);
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);
console.log(bracelet);
  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Container style={{ marginBottom: 80 }}>
      {loadingProducts && Object.keys(bracelet).length > 0 ? (
        <>
          <Box display="flex" flexWrap="nowrap">
            <Card
              key={bracelet.id}
              onMouseEnter={() => handleHover(bracelet.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                top: hoveredCard === bracelet.id ? '10px' : '0',
                transition: 'top 0.4s',
                width: '20%',
                height: '30%',
                boxShadow: hoveredCard === bracelet.id ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
                border: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                marginRight: '30px',
                marginLeft: '10px',
              }}
            >
              <CardContent>
                <Link to="/ListeProduct">
                  <CardMedia
                    component="img"
                    alt="Original Image"
                    height="200"
                    image={bracelet.imageList[0].url} 
                    style={{ borderRadius: 5 }}
                  />
                </Link>
                <div>
                  <Title1>{bracelet.name}</Title1>
                  <Price style={{ textAlign: 'center' }}>{bracelet.price}</Price>
                </div>
              </CardContent>
            </Card>
          </Box>
        </>
      ) : null}
    </Container>
  );
}
