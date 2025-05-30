import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { iconComponents, MOVIE_LISTS, TOP_LISTS } from '../../../constans';

const Icon = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const trigger = useScrollTrigger({
    target: window,
  });

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LISTS.map(item => {
                    return (
                      <Link
                        key={item.title}
                        component={RouterLink}
                        to={item.url}
                        sx={{ textDecoration: 'none' }}
                      >
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <Icon iconName={item.icon} />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map(item => {
                    return (
                      <Link
                        key={item.title}
                        component={RouterLink}
                        to={item.url}
                        sx={{ textDecoration: 'none' }}
                      >
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <Icon iconName={item.icon} />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
            <Typography
              sx={{ color: 'white', textDecoration: 'none' }}
              component={RouterLink}
              variant="h4"
              to="/"
            >
              betflix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
