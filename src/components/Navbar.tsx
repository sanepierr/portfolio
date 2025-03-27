import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useScrollTrigger,
  Slide,
  Container,
  useTheme,
  IconButton,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface Props {
  children: React.ReactElement;
}

interface NavbarProps {
  onLogout: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ onLogout, darkMode, onDarkModeToggle }: NavbarProps) => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: theme.palette.mode === 'dark' 
            ? 'rgba(18, 18, 18, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                color: theme.palette.mode === 'dark' ? 'white' : 'primary.main',
              }}
            >
              My Portfolio
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button
                onClick={() => scrollToSection('home')}
                sx={{
                  color: activeSection === 'home' ? 'primary.main' : theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  fontWeight: activeSection === 'home' ? 600 : 400,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(25, 118, 210, 0.1)',
                  }
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                sx={{
                  color: activeSection === 'projects' ? 'primary.main' : theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  fontWeight: activeSection === 'projects' ? 600 : 400,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(25, 118, 210, 0.1)',
                  }
                }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection('results')}
                sx={{
                  color: activeSection === 'results' ? 'primary.main' : theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  fontWeight: activeSection === 'results' ? 600 : 400,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(25, 118, 210, 0.1)',
                  }
                }}
              >
                Results
              </Button>
              <Button
                onClick={() => scrollToSection('hobbies')}
                sx={{
                  color: activeSection === 'hobbies' ? 'primary.main' : theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  fontWeight: activeSection === 'hobbies' ? 600 : 400,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(25, 118, 210, 0.1)',
                  }
                }}
              >
                Hobbies
              </Button>
              <IconButton
                onClick={onDarkModeToggle}
                sx={{
                  color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(25, 118, 210, 0.1)',
                  }
                }}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button
                onClick={onLogout}
                startIcon={<LogoutIcon />}
                sx={{
                  color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(25, 118, 210, 0.1)',
                  }
                }}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 