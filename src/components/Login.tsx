import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const theme = useTheme();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  // Hard-coded credentials
  const validCredentials = {
    username: 'admin',
    password: 'password123',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      credentials.username === validCredentials.username &&
      credentials.password === validCredentials.password
    ) {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm">
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 30, color: 'white' }} />
          </Box>
          <Typography 
            variant="h4" 
            gutterBottom 
            align="center"
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to My Portfolio
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mt: 1 }}>
            Please login to continue
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            variant="outlined"
            sx={{ mb: 3 }}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ 
              py: 1.5,
              background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0 30%, #1ab6e3 90%)',
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login; 