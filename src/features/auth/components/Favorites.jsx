import * as React from "react";

import { Card, CardContent, CardActions, Typography, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Favorites = () => {

  const [favoritos, setFavoritos] = React.useState([]);

  React.useEffect(() => {
    const data = localStorage.getItem("favoritos");
    if (data) {
      setFavoritos(JSON.parse(data));
    }
  }, []);

  const eliminarFavorito = (title) => {

    const nuevos = favoritos.filter((f) => f.title !== title);

    setFavoritos(nuevos);

    localStorage.setItem("favoritos", JSON.stringify(nuevos));

    // actualizar contador del header
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (

    <Box
      component="main"
      sx={{
        marginTop: { xs: "0.5%", sm: "1.5%", md: "2.5%" },
        minHeight: "120vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >

{/* TITULO */}

      <Box
        sx={{
          width: { xs: "45%", sm: "30%", md: "18%", lg: "12%" },
          mx: 3,
          my: 2,
          px: 0.7,
          py: 0.3,
          backgroundColor: "#d10a00",
          borderRadius: "10px",
          border: "2px solid #000000",
          display: "flex",
          justifyContent: "center",
          boxShadow: "4px 6px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 12, sm: 14, md: 16 },
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600
          }}
        >
          Mis Favoritos
        </Typography>
      </Box>

{/* CONTENEDOR CARDS */}

      <Box
        sx={{
          mx: 3,
          my: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-around" },
          gap: 3,
        }}
      >

{favoritos.length === 0 && (
  <Typography
  sx={{
    color: "white",
    fontFamily: "'Poppins', sans-serif"
  }}>
    No tienes artículos en favoritos
  </Typography>
)}

{favoritos.map((articulo, index) => (

<Card
key={index}
variant="outlined"
sx={{
minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
display: "flex",
flexDirection: "column",
borderRadius: "20px",
boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
backgroundColor: "#1e1e1e",
}}>

<Box
sx={{
width: "100%",
height: { xs: "55%", sm: "60%", md: "65%" },
overflow: "hidden",
}}>

<img
src={articulo.image}
alt={articulo.title}
style={{
width: "100%",
height: "100%",
objectFit: "cover",
}}/>

</Box>

<CardContent sx={{ fontFamily: "'Poppins', sans-serif" }}>

<Typography
sx={{
color: "white",
fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },
fontFamily: "'Poppins', sans-serif",
fontWeight: 600
}}>
{articulo.title}
</Typography>

<Typography
sx={{
color: "gray",
opacity: 0.6,
fontFamily: "'Poppins', sans-serif"
}}>
Men's Shoes
</Typography>

<Typography
sx={{
color: "white",
fontFamily: "'Poppins', sans-serif",
fontWeight: 500
}}>
{articulo.price}
</Typography>

<CardActions>

<Button
variant="contained"
sx={{
border: "2px solid red",
backgroundColor: "white",
borderRadius: "10px",
fontFamily: "'Poppins', sans-serif",
}}
onClick={() => eliminarFavorito(articulo.title)}
>

<DeleteIcon sx={{ color: "red" }} />

<Typography
sx={{
color: "red",
ml: 1,
fontFamily: "'Poppins', sans-serif",
fontWeight: 500
}}
>
Eliminar
</Typography>

</Button>

</CardActions>

</CardContent>

</Card>

))}

</Box>

</Box>

  );
};