'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6600',
      dark: '#E55A00',
      light: '#FF7711',
    },
    secondary: {
      main: '#475569',
      light: '#64748B',
    },
  },
  typography: {
    fontFamily: 'Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
});

export default theme;
