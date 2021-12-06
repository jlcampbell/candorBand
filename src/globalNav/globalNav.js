import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemButton } from '@mui/material';
import logo from '../logoName.png';
import styles from './globalNav.module.scss'

const drawerWidth = 240;

const links = [{
    name: "merch",
    url: '',
    
}, {
    name: 'music',
    url: 'https://linktr.ee/CandorBand'
}]

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor: 'black',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: 'none',
 
  textAlign: 'center',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  ...(open && { 
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const CenterHeader = styled('img')(({ theme }) => ({
    marginLeft: 'calc(50% - 140px)',
    //  marginRight: 'auto'    
}));

const AlignedIconButton = styled(IconButton)(({ theme }) => ({
    
    // marginRight: 'auto'    
}));


  

export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '>*': {border: 'none'},
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
       
        <List>
          {links.map((link, index) => (
            <ListItem button key={link.name} disablePadding>
             <ListItemButton component='a' href={link.url}>
                <ListItemText primary={link.name} />
             </ListItemButton>
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        <AppBar position="absolute" open={open}>
        <Toolbar>
          <AlignedIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {open ? <CloseIcon/> : <MenuIcon /> }
          </AlignedIconButton>
          <AlignedIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open && <CloseIcon/> }
          </AlignedIconButton>
          <CenterHeader className={styles.logo} src={logo} alt="Candor Logo"></CenterHeader>

        </Toolbar>
      </AppBar>
        {props.children}
      </Main>
    </Box>
  );
}
