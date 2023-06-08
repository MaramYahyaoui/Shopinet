import React, { useState, useEffect } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import { AppbarHeader } from '../../styles/appbar/index';
import Actions from './action';
import MenuIcon from '@mui/icons-material/Menu';
import { useUIContext } from '../../context/ui';
import { Colors } from '../../styles/themes';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import Modal from 'react-modal';
import Sidebar from './SideBar';

export default function AppbarDesktop({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const images = [
    'assets/banner.png',
    'assets/banner1.png',
    'assets/humainblack.png',
    'assets/Humanblanc.png'
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarItems, setSidebarItems] = useState([]);

  // ...

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Add your items to the sidebarItems array
  const items = ['Item 1', 'Item 2', 'Item 3'];
  useEffect(() => {
    setSidebarItems(items);
  }, []);
  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <img
          src={images[imageIndex]}
          alt={`Image ${imageIndex}`}
          style={{ width: '50%', animation: 'slide-in-left 1s ease-out' }}
        />
        <img
          src={images[(imageIndex + 1) % 2]}
          alt={`Image ${(imageIndex + 1) % 2}`}
          style={{ width: '50%', animation: 'slide-in-right 1s ease-out' }}
        />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center',  fontSize: '32px',
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'Poppins' }}>
      
         Obtenez jusqu'à 30% de <br />
          réduction sur les <br />
          nouveautés
 
    
      </div>
      <IconButton onClick={openSidebar} style={{ position: 'absolute ', top: 0, left: 1250 }}>
        <MenuIcon />
      </IconButton>
      {/* ... Votre code existant ... */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
     

        <Link to="/">
          <AppbarHeader src="/assets/logoshopinet1.png" style={{ position: 'absolute', top: 0, left: 20, right: 0 }} />
        </Link>
        <Popup buttonTitle="Decouvrir l'offre" />

      </div>

      <Actions />
    </>
  );
}
