import React from "react";
import {
  Container,
  Paper,
  Typography,
  Button
} from "@mui/material";
import { useToggle } from "../hooks/useToggle";

export const UseCustomHookExample = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          textAlign: "center"
        }}
      >
        <Typography variant="h5" gutterBottom>
          Custom Hook: useToggle
        </Typography>

        <Button
          variant="contained"
          onClick={toggleVisibility}
          sx={{ mb: 2 }}
        >
          Mostrar / Ocultar
        </Button>

        {isVisible && (
          <Typography variant="h6">
            🎉 Ahora me ves!
          </Typography>
        )}
      </Paper>
    </Container>
  );
};