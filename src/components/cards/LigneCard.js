import { Box, CardContent, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CardsContainer, ColorItem, ColorItem1, ColorList, ColorList1, Image, Price, ProductCard, Title1 } from '../../styles/card/card'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles/themes'
import { Circle } from '@mui/icons-material'
import axios from 'axios'

export default function LigneCard() {

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
  {products.map((product) => (
    <div key={product.id} style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
      <ProductCard style={{ flexBasis: '100%', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Link to={`/DetailsProduct/${product.id}`} >  <Image component="img" src={product.imageList && product.imageList.length > 0 ? JSON.parse(product.imageList[0]).url : ''}alt="Product image" style={{ width: '200px', height: 'auto' }} /></Link>
        <CardContent style={{ marginLeft: '10px' }}>
          <h2 style={{textTransform:'capitalize'}}>{product.nom}</h2>
          <h5>{product.prix} TND</h5>
         
          <h6 style={{color:Colors.dim_grey}}>{product.description}</h6>
        </CardContent>
      </ProductCard>
    </div>
  ))}
</Container>

  )
}

