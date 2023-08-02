import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    margin: theme.spacing(1, 2),
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <a className={classes.link}>Home</a>
            </Link>
          </Typography>
          <Link href="/products" passHref>
            <a className={classes.link}>Products</a>
          </Link>
          <Link href="/controls" passHref>
            <a className={classes.link}>Controls</a>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
