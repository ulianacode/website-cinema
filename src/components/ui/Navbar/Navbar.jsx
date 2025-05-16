import MenuIcon from '@mui/icons-material/Menu';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';

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
                  <ListItemButton>
                    <ListItemIcon>
                      <MovieFilterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Фильмы" />
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
