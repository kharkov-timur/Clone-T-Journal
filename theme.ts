import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 0,
      },
    },
    MuiButton: {
      root: {
        borderRadius: '8px',
      },
      contained: {
        backgroundColor: 'white',
        height: '40px',
        minWidth: '150px',
        boxShadow:
          '0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0' +
          ' 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
        '&:hover': {
          boxShadow:
            '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0' +
            ' rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
          backgroundColor: 'white',
        },
        ['@media (max-width:960px)']: {
          minWidth: '35px',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fill: '#252525',
      },
    },
  },
});
