import React, { useEffect, useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Container, Pagination } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from '@mui/icons-material/GridView';
import BracCard from '../components/cards/BracCard';
import { GridOnOutlined } from '@mui/icons-material';
import ProductCardExample from '../components/cards';
import LigneCard from '../components/cards/LigneCard';
import ProductCard from '../components/cards/index2';
import axios from 'axios';
import { Route, useParams } from 'react-router-dom';

export default function ListeProduct() {
  const [activeComponent, setActiveComponent] = useState('ProductCard');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 12;
  const { myVariable } = useParams();
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
  const fetchHandler = async () => {
    return await axios
      .get(
        `https://c534-197-26-80-81.ngrok-free.app/Product/getProductByCategory/${myVariable}`,
      )
      .then(res => res.data);
  };
  fetchHandler().then(data => {
    setProducts(data.products);
  });

  const handleGridClick = () => {
    setActiveComponent('ProductCard');
  };

  const handleMenuClick = () => {
    setActiveComponent('BracCard');
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const getTotalPages = () => {
    return Math.ceil(products.length / productsPerPage);
  };

  const getPageProducts = () => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  return (
    <MainLayout pageTitle="Boutique">
      <Container style={{ padding: 5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <text>Affichage de {((page - 1) * productsPerPage) + 1} à {Math.min((page * productsPerPage), products.length)} sur {products.length}</text>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: 5 }}>Voir</p>
            <GridViewIcon
              style={{ color: activeComponent === 'ProductCard' ? 'orange' : 'black' }}
              onClick={handleGridClick}
            />
            <MenuIcon
              style={{ color: activeComponent === 'BracCard' ? 'orange' : 'black' }}
              onClick={handleMenuClick}
            />
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridGap: '10px' }}>
          {activeComponent === 'ProductCard' ? <ProductCard products={getPageProducts()} /> : <LigneCard />}
        </div>
        <Pagination
          count={getTotalPages()}
          size="small"
          style={{ marginLeft: 510 }}
          page={page}
          onChange={handleChangePage}
        />
      </Container>
    </MainLayout>
  );
}
