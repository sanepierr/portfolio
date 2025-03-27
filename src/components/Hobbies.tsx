import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  useTheme,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BookIcon from '@mui/icons-material/Book';
import ExtensionIcon from '@mui/icons-material/Extension';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsIcon from '@mui/icons-material/Sports';

const Hobbies = () => {
  const theme = useTheme();

  const hobbies = [
    { icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />, title: 'F1 Racing' },
    { icon: <SportsEsportsIcon sx={{ fontSize: 40 }} />, title: 'EA Sports' },
    { icon: <BookIcon sx={{ fontSize: 40 }} />, title: 'Reading' },
    { icon: <CameraAltIcon sx={{ fontSize: 40 }} />, title: 'Photography' },
    { icon: <HikingIcon sx={{ fontSize: 40 }} />, title: 'Hiking' },
  ];

  return (
    <Box id="hobbies" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
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
          <Typography 
            variant="h3" 
            gutterBottom 
            align="center"
            sx={{ 
              mb: 6,
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            My Hobbies
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      background: theme.palette.mode === 'dark' 
                        ? 'rgba(30, 30, 30, 0.8)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <CardMedia
                      component="iframe"
                      height="250"
                      src="https://www.youtube.com/embed/u5rWBgBjDsc"
                      title="F1 Racing"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Formula 1 Racing
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        My passion for F1 extends beyond watching the races to immersing myself in F1 gaming.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      background: theme.palette.mode === 'dark' 
                        ? 'rgba(30, 30, 30, 0.8)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <CardMedia
                      component="iframe"
                      height="250"
                      src="https://www.youtube.com/embed/xPS0bI_Q4BU"
                      title="EA Sports FC 25"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        EA Sports FC
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        EA Sports FC 25 represents the evolution of football gaming, combining hypermotion technology with realistic gameplay.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Other Hobbies
              </Typography>
              <Grid container spacing={2}>
                {hobbies.map((hobby, index) => (
                  <Grid item xs={6} key={index}>
                    <Box
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(0, 0, 0, 0.05)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 1,
                        }}
                      >
                        {hobby.icon}
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {hobby.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hobbies; 