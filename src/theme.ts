import { createTheme, IconButton } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#69f0ae',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          color: 'black',
          backgroundColor: '#69f0ae',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            paddingLeft: 10,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid grey`,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `2px solid #69f0ae`,
            },
          },
          '&:hover .MuiOutlinedInput-notchedOutline ': {
            borderColor: '#69f0ae',
          },
        },
      },
    },
  },
});
