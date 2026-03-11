import React, { createContext, useContext, useState } from "react";
import { Container, Paper, Typography, Button } from "@mui/material";

// Crear contexto
const CounterContext = createContext();

// Componente que consume el contexto
const CounterContent = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <Paper
      elevation={4}
      sx={{
        mt: 4,
        p: 3,
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        useContext Counter
      </Typography>

      <Typography variant="h6">Valor: {count}</Typography>

      <Button variant="contained" sx={{ mt: 2 }} onClick={increment}>
        Incrementar
      </Button>
    </Paper>
  );
};

// Componente principal que provee el contexto
export const UseContextSimple = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      <Container maxWidth="sm">
        <CounterContent />
      </Container>
    </CounterContext.Provider>
  );
};
