import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useTheme
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Equalizer as EqualizerIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  MenuBook as MenuBookIcon,
  SportsEsports as SportsEsportsIcon
} from '@material-ui/icons';
import clsx from 'clsx';
import { func } from 'prop-types';

import Footer from '../Footer';
import Header from '../Header';
import * as S from './styled';

const drawerWidth = 240;

const sidebarItems = [
  { name: 'Main', icon: <HomeIcon />, url: '/' },
  { name: 'Textbook', icon: <MenuBookIcon />, url: '/textbook' },
  { name: 'Game', icon: <SportsEsportsIcon />, url: '/game' },
  { name: 'Statistics', icon: <EqualizerIcon />, url: '/statistics' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: '#fff'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36,
    color: '#000'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 0
  },
  header: {
    width: '100%'
  }
}));

const MiniDrawer = ({ routePage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(location.pathname);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.header}>
            <Header />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sidebarItems.map((element) => (
            <S.StyledLink
              exact
              to={element.url}
              key={element.name}
              activeStyle={{
                fontWeight: 'bold',
                color: 'blue'
              }}
            >
              <S.StyledListItem
                button
                selected={selectedIndex === element.url}
                onClick={(event) => handleListItemClick(event, element.url)}
              >
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.name} />
              </S.StyledListItem>
            </S.StyledLink>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {routePage()}
      </main>
      <Footer />
    </div>
  );
};

MiniDrawer.propTypes = {
  routePage: func
};

export default MiniDrawer;
