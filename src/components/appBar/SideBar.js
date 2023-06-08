import { IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const Sidebar = ({ isOpen, onClose, items }) => {
    const sidebarStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: isOpen ? 'block' : 'none',
        zIndex: 9999,
    };

    const sidebarContentStyles = {
        position: 'absolute',
        top: '0',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
    };

    const listStyles = {
        listStyle: 'none',
        padding: 0,
        marginTop: '150px',

    };

    const listItemStyles = {
        padding: '10px',
        color: 'white',
        fontSize: 30,
        marginLeft: '200px',
        alignItems: 'center'
    };

    const buttonStyles = {
        position: 'absolute',
        top: '150px',
        right: '50px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color:'white'
    };


    return (
        <div style={sidebarStyles}>
            <div style={sidebarContentStyles}>
                <ul style={listStyles}>
                <Link to={"/ProductList"} ><li style={listItemStyles}>Femme</li></Link>    
                <Link to={"/ProductList"}> <li style={listItemStyles}>Homme</li></Link>   
                <Link to={"/About"}><li style={listItemStyles}>A propos de nous</li></Link>   
                <Link to={"/Contact"}> <li style={listItemStyles}>Contact</li></Link> 
                <Link  to={"/FAQ"}>  <li style={listItemStyles}>FAQ</li></Link>   
                </ul>
                <button
                    style={buttonStyles}
                    onClick={onClose}
                >
                    <IconButton><CloseIcon color='  white' /></IconButton>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
