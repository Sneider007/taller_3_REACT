import React, { useReducer } from "react";
import { Container, Paper, Typography, Button, Stack } from "@mui/material";

// Estado inicial
const initialState = {
  count: 0,
};

// Reducer (maneja las acciones)
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
          useReducer Example
        </Typography>

        <Typography variant="h4" sx={{ mb: 3 }}>
          Contador: {state.count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </Button>

          <Button
            variant="contained"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </Button>

          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};
