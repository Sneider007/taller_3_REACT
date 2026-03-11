import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Stack,
} from "@mui/material";

export const UseStateColor = () => {
  const [color, setColor] = useState("red");

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
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: color,
            transition: "color 0.3s ease",
          }}
        >
          My favorite color is {color}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={() => setColor("blue")}
            sx={{ backgroundColor: "blue" }}
          >
            Blue
          </Button>

          <Button
            variant="contained"
            onClick={() => setColor("white")}
            sx={{ backgroundColor: "grey.300", color: "black" }}
          >
            White
          </Button>

          <Button
            variant="contained"
            onClick={() => setColor("yellow")}
            sx={{ backgroundColor: "gold", color: "black" }}
          >
            Yellow
          </Button>

          <Button
            variant="contained"
            onClick={() => setColor("red")}
            sx={{ backgroundColor: "red" }}
          >
            Red
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};
