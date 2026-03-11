import React, { useRef } from "react";
import { Container, Paper, Typography, Button, TextField } from "@mui/material";

export const UseRefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Container maxWidth="sm">
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
          useRef Example
        </Typography>

        <TextField
          inputRef={inputRef}
          label="Escribe algo"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        />

        <Button variant="contained" sx={{ mt: 3 }} onClick={focusInput}>
          Enfocar Input
        </Button>
      </Paper>
    </Container>
  );
};
