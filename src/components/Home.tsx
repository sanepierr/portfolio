import React from 'react';
import { Container, Typography, Box, Link, Paper, useTheme, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import AssistantIcon from '@mui/icons-material/Assistant';
import SecurityIcon from '@mui/icons-material/Security';
import WebIcon from '@mui/icons-material/Web';

const Home = () => {
  const theme = useTheme();

  return (
    <Box id="home" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(30, 30, 30, 0.8)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 4,
          }}>
            <Box
              sx={{
                position: 'relative',
                width: 200,
                height: 200,
                mb: 3,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -4,
                  left: -4,
                  right: -4,
                  bottom: -4,
                  borderRadius: '50%',
                  background: theme.palette.primary.main,
                  zIndex: -1,
                  animation: 'rotate 4s linear infinite',
                },
                '@keyframes rotate': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            >
              <Box
                component="img"
                src={process.env.PUBLIC_URL + '/IMG_4137.jpeg'}
                alt="Mokili Promise Pierre"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 0 20px rgba(0, 0, 0, 0.5)' 
                    : '0 0 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Box>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}
            >
              Mokili Promise Pierre
            </Typography>
            
            <Typography 
              variant="h5" 
              color="text.secondary" 
              gutterBottom 
              align="center"
            >
              Data Scientist & Cybersecurity Enthusiast
            </Typography>
          </Box>

          <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', gap: 3 }}>
            <Link 
              href="https://github.com/sanepierr" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }}
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </Link>
            <Link 
              href="https://linkedin.com/in/pierre-mokili" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }}
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </Link>
            <Link 
              href="https://instagram.com/p.i.err.e" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }}
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
            </Link>
          </Box>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            My journey in technology began with a passion for gaming and a curiosity about how games were created. 
            This initial interest sparked my desire to understand the inner workings of technology and led me to 
            pursue a career in software development. Today, I'm focused on data science and cybersecurity, but my 
            dream of creating innovative gaming experiences remains a driving force in my career.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
            My aspirations include:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Typography component="li" sx={{ mb: 1, fontSize: '1.1rem' }}>
              Becoming an expert in data science and cybersecurity
            </Typography>
            <Typography component="li" sx={{ mb: 1, fontSize: '1.1rem' }}>
              Founding and growing my own gaming company
            </Typography>
            <Typography component="li" sx={{ mb: 1, fontSize: '1.1rem' }}>
              Creating innovative gaming experiences that inspire others
            </Typography>
            <Typography component="li" sx={{ mb: 1, fontSize: '1.1rem' }}>
              Contributing to the security and advancement of technology
            </Typography>
          </Box>
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            mt: 4,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(30, 30, 30, 0.8)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
          }}
          id="projects"
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              textAlign: 'center',
              mb: 4,
              color: theme.palette.primary.main,
            }}
          >
            Featured Projects
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AssistantIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" component="div">
                      Personal Scheduling Assistant
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    A powerful desktop application for managing tasks and deadlines. Features include task scheduling, 
                    deadline tracking, and time slot analysis to help optimize your productivity.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href="https://github.com/sanepierr/personal-scheduling-assistant" 
                    target="_blank"
                    startIcon={<GitHubIcon />}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WebIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" component="div">
                      Portfolio Website
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    A modern, responsive portfolio website built with React and Material-UI. Features dark mode, 
                    smooth scrolling, and an elegant design to showcase professional work and skills.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href="https://github.com/sanepierr/portfolio" 
                    target="_blank"
                    startIcon={<GitHubIcon />}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CodeIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" component="div">
                      Job Portal
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    A full-stack job portal application built with modern technologies. Features include job listings, 
                    user authentication, job search functionality, and an intuitive interface for both job seekers and employers.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href="https://github.com/sanepierr/job-portal" 
                    target="_blank"
                    startIcon={<GitHubIcon />}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SecurityIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" component="div">
                      Landing Page Template
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    A clean and modern landing page template built with HTML and CSS. Features responsive design, 
                    smooth animations, and optimized performance for better user experience.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href="https://github.com/sanepierr/landing-page-template" 
                    target="_blank"
                    startIcon={<GitHubIcon />}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home; 