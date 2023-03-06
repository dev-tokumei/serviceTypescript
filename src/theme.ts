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
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          background: '#45544F',
          color: '#fff',
          border: `2px solid #75FBC8`,
          marginTop: `5px`,
          marginBottom: `7px`,
        },
        option: {
          '&[aria-selected="true"]': {
            // backgroundColor: '#e3abed',
          },

          '&:hover': {
            // backgroundColor: '#9c27b0',
          },
          color: '#fff',
        },
      },
    },
  },
});
