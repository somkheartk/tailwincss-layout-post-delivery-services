'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
      dark: '#4338CA',
      light: '#6366F1',
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
