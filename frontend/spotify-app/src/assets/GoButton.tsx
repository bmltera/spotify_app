import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';

// Augment the palette to include a green color
declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
  }

  interface PaletteOptions {
    green?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include a green option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    green: true;
  }
}

const theme = createTheme({
  palette: {
    green: {
      main: '#1ED760',
      light: '#1ED760',
      dark: '#1ED760',
      contrastText: '#ffffff',
    },
  },
});

export default function GoButton() {
  return (
    <ThemeProvider theme={theme}>
        <Button variant="contained" color="green" size='large' >
          roast me!
        </Button>
    </ThemeProvider>
  );
}