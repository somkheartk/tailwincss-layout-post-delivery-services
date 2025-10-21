'use client';

import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Language } from '@/locales/translations';

interface HeaderProps {
  onMenuClick: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  role: string;
  onRoleChange: (role: string) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  language, 
  onLanguageChange, 
  role, 
  onRoleChange,
  t 
}) => {
  const handleLanguageChange = (event: SelectChangeEvent) => {
    onLanguageChange(event.target.value as Language);
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    onRoleChange(event.target.value);
  };

  return (
    <AppBar position="fixed" className="bg-primary shadow-md" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, display: { xs: 'none', md: 'block' } }}>
          {t.appName}
        </Typography>
        
        {/* Role Selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <AdminPanelSettingsIcon sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }} />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={role}
              onChange={handleRoleChange}
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '.MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
            >
              <MenuItem value="customer">{t.roles.customer}</MenuItem>
              <MenuItem value="driver">{t.roles.driver}</MenuItem>
              <MenuItem value="admin">{t.roles.admin}</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Language Selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <LanguageIcon sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }} />
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '.MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
            >
              <MenuItem value="th">ไทย</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
