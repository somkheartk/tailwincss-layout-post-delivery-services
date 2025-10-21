'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-primary shadow-md">
      <Toolbar className="container mx-auto">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <LocalShippingIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          แฟลช เอ็กซ์เพรส
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" className="hover:bg-primary-dark">
            ติดตาม
          </Button>
          <Button color="inherit" className="hover:bg-primary-dark">
            ส่งพัสดุ
          </Button>
          <Button color="inherit" className="hover:bg-primary-dark">
            บริการ
          </Button>
          <Button color="inherit" className="hover:bg-primary-dark">
            เกี่ยวกับ
          </Button>
        </Box>
        
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
