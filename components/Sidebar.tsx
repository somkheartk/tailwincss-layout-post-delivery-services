'use client';

import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Language } from '@/locales/translations';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  language: Language;
  t: any;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, language, t, isMobile = false }) => {
  const menuItems = [
    { icon: <DashboardIcon />, text: t.menu.dashboard, path: '#dashboard' },
    { icon: <SearchIcon />, text: t.menu.tracking, path: '#tracking' },
    { icon: <SendIcon />, text: t.menu.send, path: '#send' },
    { icon: <ShoppingCartIcon />, text: t.menu.orders, path: '#orders' },
    { icon: <MiscellaneousServicesIcon />, text: t.menu.services, path: '#services' },
    { icon: <InfoIcon />, text: t.menu.about, path: '#about' },
  ];

  const drawerWidth = 260;

  const drawerContent = (
    <Box sx={{ width: drawerWidth, height: '100%', bgcolor: 'background.paper' }}>
      {/* Logo Section */}
      <Box 
        sx={{ 
          p: 2.5, 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 0,
        }}
      >
        <LocalShippingIcon sx={{ fontSize: 32 }} />
        <Box>
          <Box sx={{ fontWeight: 700, fontSize: '1.1rem' }}>{t.appName}</Box>
        </Box>
      </Box>

      <Divider />

      {/* Menu Items */}
      <List sx={{ py: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              sx={{
                mx: 1,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateX(4px)',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
              onClick={() => {
                if (isMobile) {
                  onClose();
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'primary.main', transition: 'color 0.3s ease' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        /* Desktop Permanent Drawer */
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: '1px solid',
              borderColor: 'divider',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
