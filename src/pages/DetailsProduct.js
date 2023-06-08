import React, { useEffect, useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Box, Button, Checkbox, Container, Divider, ImageList, ImageListItem, Pagination, } from '@mui/material';
import { Colors } from '../styles/themes';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { IconButton, Typography } from '@mui/joy';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MyCard from '../components/cards/card';
import Popup from '../components/Popup';
import Popup1 from '../components/Popup1';
import ProductCardExample from '../components/cards';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Title } from '../styles/card/card';
export default function DetailsProduct() {
    useEffect(() => {
        document.title = "shopinet";
      }, []);
    const [selectedImage, setSelectedImage] = useState('assets/det.png');
    const images = ["assets/det.png", "assets/left.png", "assets/pull.png"];
    const [count, setCount] = React.useState(0);
    const handleImageClick = (image) => {
        setSelectedImage(image.url);
    };
    const { id } = useParams();

    const [loadingProducts, setLoadingProducts] = useState(false);
    const [products, setProducts] = useState({});
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoadingProducts(true);
                const response = await axios.get(`http://localhost:5005/Product/GetProductId/${id}`);
                // console.log("tet products fecth", response.data)
                let buffer= [];
                let array = response.data.product.imageList
                let result = response.data.product
                console.log(array);
                buffer = array.map(elem => JSON.parse(elem));
                console.log(buffer);
                result.imageList = buffer;
                console.log("resulting data sanitized ===>", result);
                setProducts(result);
                setLoadingProducts(false)
                // console.log("products set ===>", products);
            } catch (error) {
                console.error(error);
            }
        };



        fetchProducts();
    }, [id, products?.length]);

   

    return (
        <MainLayout pageTitle="Boutique">
            <Container>
                {!loadingProducts && products.id
                ?<>
                    <section style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginLeft: 40 }}>
                    <div style={{ flex: 1, marginLeft: 90 }}>
                        <img src={products.imageList[0].url} style={{ borderRadius: '8px', width: '80%' }} /> 
                        <ImageList sx={{ width: 250, height: 110, marginTop: 3, marginLeft: 3, borderRadius: '8px' }} cols={3}>
                        {products.imageList.map((item) => (
                            <ImageListItem key={item} onClick={() => handleImageClick(item)}>
                                <img
                                    src={item.url}
                                    srcSet={item.url}
                                    alt={item.url}
                                    loading="lazy"
                                    style={{ filter: item !== selectedImage ? 'grayscale(80%)' : 'none', height:'20px' ,width:'100px'}}
                                />
                            </ImageListItem> 
                        ))}
                        </ImageList>
                    </div>
                    <div style={{ flex: 1, marginRight: 90 }}>

                        <div key={products.id} >
                            <h5>{products.prix} TND</h5>
                            <h4>{products.nom}</h4>
                            <p style={{ width: '500px', color: Colors.gray, fontSize: 13 }}>{products.description}</p>
                        </div>

                        
                            

                            <div >
                                <Popup1 buttonTitle="Achetez Maintenant" />
                            </div>

                    
                        <Divider style={{ marginTop: 15, color: Colors.grey }} />
                        <div>

                            <div key={products.id} >
                                <div style={{ display: 'flex' }}> <p style={{ fontWeight: '400', fontSize: 12 }}>Catégorie :  </p>
                                    <p style={{ color: Colors.gray, fontSize: 12 }}>{products.categorie}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}> <p style={{ fontWeight: '400', fontSize: 12 }}>Partager :  </p>
                                    <IconButton style={{ backgroundColor: 'white' }} >
                                        <FacebookIcon fontSize='small' color={'grey'} />
                                        <PinterestIcon fontSize='small' color={Colors.gray} />

                                    </IconButton>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section style={{ marginTop: 20, marginBottom: 30 }}>
                    <Divider />
                    <Title>Produit connexes</Title>
                    <ProductCardExample />
                </section>
                </>
                :null}

            </Container>
            <Pagination count={3} size="small" style={{ marginLeft: 580, marginBottom: 30 }} />

        </MainLayout>
    );
}
/**  <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c - 1)}
        >
          <Remove />
        </IconButton>
        <Typography fontWeight="md" textColor="text.secondary">
          {count}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c + 1)}
        >
          <Add />
        </IconButton>
        <Checkbox
          onChange={(event) => setShowZero(event.target.checked)}
          checked={showZero}
          label="show zero"
        />
          const [count, setCount] = React.useState(0);
          import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
 */