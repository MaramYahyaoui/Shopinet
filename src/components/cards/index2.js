import { Box, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { Colors } from '../../styles/themes';
import { Price, Title1 } from '../../styles/card/card';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = () => {
 
  const [couleur, setCouleur] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5005/Product/GetAllProducts");
        console.log(response.data)
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Box display="flex" flexWrap="wrap">
        {products.map((product) => (
          <Card
            key={product.id}
            onMouseEnter={() => handleHover(product.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              top: hoveredCard === product.id ? '10px' : '0',
              transition: 'top 0.3s',
              width: 'calc(25% - 40px)', // 4 images per line with 40px margin on each side
              margin: '20px',
              height: '50%',
              boxShadow: hoveredCard === product.id ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
           <Link to={`/DetailsProduct/${product.id}`} >
              <CardMedia
                component="img"
                alt="Original Image"
                height="280"
                image={product.imageList && product.imageList.length > 0 ? JSON.parse(product.imageList[0]).url : ''}
                style={{ borderRadius: 5 }}
              />
            </Link>

            <CardContent>
              <div>
                <Title1>{product.nom}</Title1>
                <Price style={{ textAlign: 'center' }}>{product.prix} TND</Price>
                {/* 
                <Box display="flex" justifyContent="center" mt={1} alignItems="center">
                  {product.couleur.slice(0, 2).map((color) => (
                    <Circle
                      key={color}
                      sx={{
                        color: color,
                        width: 16,
                        height: 16,
                      }}
                      fontSize="small"
                    />
                  ))}
                  {product.couleur.length > 2 && (
                    <Box
                      sx={{
                        background: 'white',
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '2px 2px',
                        borderRadius: '16px',
                      }}
                    >
                      +{product.couleur.length - 2}
                    </Box>
                  )}
                </Box> 
                */}
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ProductCard;
