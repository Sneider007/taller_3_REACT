import React, { useState, useMemo } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  List,
  ListItem,
  Stack,
} from "@mui/material";

export const UseMemoExample = () => {
  const [search, setSearch] = useState("");

  const names = [
    "Carlos",
    "Ana",
    "Pedro",
    "Maria",
    "Juan",
    "Luisa",
    "Camila",
    "Andres",
  ];

  const filteredNames = useMemo(() => {
    console.log("Filtrando nombres...");
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Buscar nombres (useMemo)
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Buscar nombre"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
          />

          <Typography variant="subtitle1">Resultados:</Typography>

          <List>
            {filteredNames.map((name, index) => (
              <ListItem key={index}>{name}</ListItem>
            ))}
          </List>
        </Stack>
      </Paper>
    </Container>
  );
};
