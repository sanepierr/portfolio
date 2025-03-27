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
  courseUnit: string;
  creditUnit: number;
  gpa: number;
}

const Results = () => {
  const theme = useTheme();
  const [results, setResults] = useState<Result[]>([
    { id: 1, courseUnit: 'Mathematics', creditUnit: 3, gpa: 3.5 },
    { id: 2, courseUnit: 'Physics', creditUnit: 4, gpa: 3.8 },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newResult, setNewResult] = useState<Omit<Result, 'id'>>({
    courseUnit: '',
    creditUnit: 0,
    gpa: 0,
  });

  const handleAdd = () => {
    if (newResult.courseUnit && newResult.creditUnit && newResult.gpa) {
      setResults([
        ...results,
        {
          id: results.length + 1,
          ...newResult,
        },
      ]);
      setNewResult({ courseUnit: '', creditUnit: 0, gpa: 0 });
    }
  };

  const handleDelete = (id: number) => {
    setResults(results.filter((result) => result.id !== id));
  };

  const handleEdit = (result: Result) => {
    setEditingId(result.id);
    setNewResult({
      courseUnit: result.courseUnit,
      creditUnit: result.creditUnit,
      gpa: result.gpa,
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
      setNewResult({ courseUnit: '', creditUnit: 0, gpa: 0 });
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
              value={newResult.courseUnit}
              onChange={(e) =>
                setNewResult({ ...newResult, courseUnit: e.target.value })
              }
              variant="outlined"
            />
            <TextField
              label="Credit Unit"
              type="number"
              value={newResult.creditUnit}
              onChange={(e) =>
                setNewResult({ ...newResult, creditUnit: Number(e.target.value) })
              }
              variant="outlined"
            />
            <TextField
              label="GPA"
              type="number"
              value={newResult.gpa}
              onChange={(e) =>
                setNewResult({ ...newResult, gpa: Number(e.target.value) })
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
                  <TableCell sx={{ fontWeight: 600 }}>Credit Unit</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>GPA</TableCell>
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
                    <TableCell>{result.courseUnit}</TableCell>
                    <TableCell>{result.creditUnit}</TableCell>
                    <TableCell>{result.gpa}</TableCell>
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