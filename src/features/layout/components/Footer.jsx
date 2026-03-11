import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#d32f2f", // MISMO ROJO DEL HEADER
        color: "white",
        mt: 6,
        pt: 5,
        pb: 3,
        px: 4,
      }}
    >
      <Grid container spacing={4}>
        
        {/* INFO */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Jordan Quality Store
          </Typography>

          <Typography variant="body2">
            Tu tienda de confianza para encontrar los mejores sneakers,
            ropa urbana y ofertas exclusivas. Calidad garantizada.
          </Typography>
        </Grid>

        {/* ENLACES */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Enlaces
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#/" color="inherit" underline="hover">
              Inicio
            </Link>

            <Link href="#/article" color="inherit" underline="hover">
              Artículos
            </Link>

            <Link href="#/offers" color="inherit" underline="hover">
              Ofertas
            </Link>

            <Link href="#/favorites" color="inherit" underline="hover">
              Favoritos
            </Link>

            <Link href="#/account" color="inherit" underline="hover">
              Mi cuenta
            </Link>
          </Box>
        </Grid>

        {/* REDES */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Síguenos
          </Typography>

          <Box>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* COPYRIGHT */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          mt: 4,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Jordan Quality Store. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};