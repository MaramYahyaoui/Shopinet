import React, { Children, useEffect, useState } from 'react'
import Promotions from '../components/promotion/Promotions'
import Footer from '../components/Footer'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { AppbarHeader } from '../styles/appbar'
import MenuIcon from "@mui/icons-material/Menu";
import { useUIContext } from '../context/ui'
import { Colors } from '../styles/themes'
import Sidebar from '../components/appBar/SideBar'

export default function MainLayout({ children, pageTitle }) {
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
      <div>
        <Promotions />
        <div>
        <IconButton onClick={openSidebar} style={{ position: 'absolute ', top: 40, left: 1250 }}>
        <MenuIcon />
      </IconButton>
      {/* ... Votre code existant ... */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
     
          <Link to="/">
            <AppbarHeader src="/assets/logoshopinet1.png" style={{ position: 'relative', top: 0, left: 20, right: 0 }} />
          </Link>
        </div>
        <div style={{
          backgroundColor: Colors.gray1,
          width: '100%',
          marginBottom: 10,
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold'
        }}>
          <span style={{ color: Colors.dim_grey, marginRight: 2 }}>Shopinet </span> --- {pageTitle}
        </div>
  
        <div>{children}</div>
        <Footer />
      </div>
    )
  }
  