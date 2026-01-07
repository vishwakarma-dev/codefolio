import { createTheme } from '@mui/material/styles';


export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#6366f1' },
      secondary: { main: '#a855f7' },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#020617',
        paper: mode === 'light' ? '#ffffff' : '#0f172a',
      },
      text: {
        primary: mode === 'light' ? '#0f172a' : '#f8fafc',
        secondary: mode === 'light' ? '#475569' : '#94a3b8',
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: { fontFamily: "'Space Grotesk', sans-serif" },
      h2: { fontFamily: "'Space Grotesk', sans-serif" },
      h3: { fontFamily: "'Space Grotesk', sans-serif" },
      h4: { fontFamily: "'Space Grotesk', sans-serif" },
      h5: { fontFamily: "'Space Grotesk', sans-serif" },
    },

    components :{
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 20,
          },
          contained: {
            boxShadow: '0 12px 30px rgba(99,102,241,0.35)',
            '&:hover': {
              boxShadow: '0 16px 40px rgba(99,102,241,0.45)',
            },
          },
          outlined: {
            borderColor:
              mode === 'light'
                ? 'rgba(15,23,42,0.2)'
                : 'rgba(248,250,252,0.2)',
          },
        },
      },
      
    },
    
    
  });
