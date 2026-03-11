import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  CircularProgress,
  Button,
  Box,
} from "@mui/material";

export const UseEffectCounter = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    // Simulación de llamada a API
    setTimeout(() => {
      setData({
        title: "React useEffect Example",
        description: "Este contenido fue cargado usando useEffect 🚀",
      });
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("Componente montado");
    fetchData();

    return () => {
      console.log("Cleanup: componente desmontado");
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          useEffect Demo
        </Typography>

        {loading ? (
          <Box sx={{ mt: 3 }}>
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>Cargando información...</Typography>
          </Box>
        ) : (
          <>
            <Typography variant="h6" sx={{ mt: 2 }}>
              {data.title}
            </Typography>

            <Typography sx={{ mt: 1, color: "text.secondary" }}>
              {data.description}
            </Typography>

            <Button variant="contained" sx={{ mt: 3 }} onClick={fetchData}>
              Recargar
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};
