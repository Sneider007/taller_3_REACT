import React, { useState, useCallback } from "react";
import { Container, Paper, Typography, Button, Stack } from "@mui/material";

// Componente hijo (memoizado)
const ChildButton = React.memo(({ onClick }) => {
  console.log("Render hijo");

  return (
    <Button variant="contained" onClick={onClick}>
      Incrementar desde hijo
    </Button>
  );
});

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // 🔥 useCallback memoriza la función
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

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
          useCallback Example
        </Typography>

        <Typography variant="h4" sx={{ mb: 2 }}>
          Contador: {count}
        </Typography>

        <Stack spacing={2}>
          <ChildButton onClick={increment} />

          <Button
            variant="outlined"
            onClick={() => setOtherState((prev) => !prev)}
          >
            Cambiar otro estado
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};
