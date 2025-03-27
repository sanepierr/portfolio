import React, { useState } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Result {
  id: number;
  unit: string;
  grade: string;
  credits: number;
  semester: string;
}

const Results = () => {
  const theme = useTheme();
  const [results, setResults] = useState<Result[]>([
    {
      id: 1,
      unit: 'Discrete Mathematics',
      grade: 'A',
      credits: 3,
      semester: 'Year 1 Semester 1'
    },
    {
      id: 2,
      unit: 'Introduction to Programming',
      grade: 'A-',
      credits: 4,
      semester: 'Year 1 Semester 1'
    },
    {
      id: 3,
      unit: 'Computer Architecture',
      grade: 'B+',
      credits: 3,
      semester: 'Year 1 Semester 1'
    },
    {
      id: 4,
      unit: 'Calculus and Linear Algebra',
      grade: 'A',
      credits: 4,
      semester: 'Year 1 Semester 1'
    },
    {
      id: 5,
      unit: 'Communication Skills',
      grade: 'A-',
      credits: 2,
      semester: 'Year 1 Semester 1'
    }
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newResult, setNewResult] = useState<Omit<Result, 'id'>>({
    unit: '',
    grade: '',
    credits: 0,
    semester: '',
  });

  const handleAdd = () => {
    if (newResult.unit && newResult.credits && newResult.grade && newResult.semester) {
      setResults([
        ...results,
        {
          id: results.length + 1,
          ...newResult,
        },
      ]);
      setNewResult({ unit: '', grade: '', credits: 0, semester: '' });
    }
  };

  const handleDelete = (id: number) => {
    setResults(results.filter((result) => result.id !== id));
  };

  const handleEdit = (result: Result) => {
    setEditingId(result.id);
    setNewResult({
      unit: result.unit,
      grade: result.grade,
      credits: result.credits,
      semester: result.semester,
    });
  };

  const handleUpdate = () => {
    if (editingId) {
      setResults(
        results.map((result) =>
          result.id === editingId
            ? { ...result, ...newResult }
            : result
        )
      );
      setEditingId(null);
      setNewResult({ unit: '', grade: '', credits: 0, semester: '' });
    }
  };

  return (
    <Box id="results" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
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
          <Typography 
            variant="h3" 
            gutterBottom 
            align="center"
            sx={{ 
              mb: 4,
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            Academic Results
          </Typography>

          <Box 
            sx={{ 
              mb: 4, 
              display: 'flex', 
              gap: 2,
              flexWrap: 'wrap',
              '& .MuiTextField-root': {
                flex: 1,
                minWidth: 200,
              }
            }}
          >
            <TextField
              label="Course Unit"
              value={newResult.unit}
              onChange={(e) =>
                setNewResult({ ...newResult, unit: e.target.value })
              }
              variant="outlined"
            />
            <TextField
              label="Grade"
              value={newResult.grade}
              onChange={(e) =>
                setNewResult({ ...newResult, grade: e.target.value })
              }
              variant="outlined"
            />
            <TextField
              label="Credits"
              type="number"
              value={newResult.credits}
              onChange={(e) =>
                setNewResult({ ...newResult, credits: Number(e.target.value) })
              }
              variant="outlined"
            />
            <TextField
              label="Semester"
              value={newResult.semester}
              onChange={(e) =>
                setNewResult({ ...newResult, semester: e.target.value })
              }
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={editingId ? handleUpdate : handleAdd}
              sx={{ 
                minWidth: 120,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
            >
              {editingId ? 'Update' : 'Add'}
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Course Unit</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Grade</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Credits</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Semester</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((result) => (
                  <TableRow 
                    key={result.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.05)' 
                          : 'rgba(0, 0, 0, 0.02)',
                      }
                    }}
                  >
                    <TableCell>{result.unit}</TableCell>
                    <TableCell>{result.grade}</TableCell>
                    <TableCell>{result.credits}</TableCell>
                    <TableCell>{result.semester}</TableCell>
                    <TableCell>
                      <Button
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(result)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(result.id)}
                        color="error"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
};

export default Results; 