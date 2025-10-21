'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6600',
      dark: '#E55A00',
      light: '#FF8533',
    },
    secondary: {
      main: '#333333',
      light: '#666666',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
});

export default theme;
