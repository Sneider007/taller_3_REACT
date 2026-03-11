import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Button,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Hooks
import { useCart } from "../hooks/CartContext";

export const Article = () => {

  const { addToCart } = useCart();

  // FAVORITOS
  const [favoritos, setFavoritos] = React.useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const esFavorito = (titulo) => {
    return favoritos.some((item) => item.title === titulo);
  };

  const agregarFavorito = (articulo) => {

    if (esFavorito(articulo.title)) return;

    const nuevosFavoritos = [...favoritos, articulo];

    setFavoritos(nuevosFavoritos);

    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    
    // Disparar evento para actualizar contador en Header
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const products = [
    {
      title: "Air Jordan 4 Retro (Imperial Purple)",
      image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_434,c_limit/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62fc581f-9c6a-4c3a-aec3-9faf44f7188b/AIR+JORDAN+4+RETRO.png",
      price: "$240",
    },
    {
      title: "Air Jordan 1 Mid",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/61fc5cf5-0233-4aeb-b610-f8194c0e3235/AIR+JORDAN+1+MID.png",
      price: "$180",
    },
    {
      title: "Air Jordan 4 Retro",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bebd2861-e25b-4c1e-8b91-a2a0b89ca46e/WMNS+AIR+JORDAN+4+RETRO.png",
      price: "$260",
    },
    {
      title: "Jordan Franchise Slide",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3f2f312-bfdf-46c8-a4b2-2f576bb27541/JORDAN+FRANCHISE+SLIDE+%28GS%29.png",
      price: "$70",
    },
    {
      title: "Jordan Spizike Low",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eb06ab88-866e-47c3-957b-f7516af0b98a/JORDAN+SPIZIKE+LOW.png",
      price: "$210",
    },
    {
      title: "Jordan Tatum 4",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3e330306-79b2-47e6-8399-2c16d5fae041/JORDAN+TATUM+4.png",
      price: "$195",
    },
    {
      title: "Air Jordan 3 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/910402-1200-auto?v=638963270732930000&width=1200&height=auto&aspect=true",
      price: "$230",
    },
    {
      title: "Air Jordan 5 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/910063-1200-auto?v=638955471730130000&width=1200&height=auto&aspect=true",
      price: "$250",
    },
    {
      title: "Air Jordan 6 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/970678-1200-auto?v=639064986617400000&width=1200&height=auto&aspect=true",
      price: "$270",
    },
    {
      title: "Air Jordan 8 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/935302-1200-auto?v=639015831133770000&width=1200&height=auto&aspect=true",
      price: "$245",
    },
    {
      title: "Air Jordan 9 Retro",
      image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/058ec224-ab76-43be-a7f6-1895719d6b35/AIR+JORDAN+9+RETRO.png",
      price: "$255",
    },
    {
      title: "Air Jordan 10 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/925787-1200-auto?v=638997619468870000&width=1200&height=auto&aspect=true",
      price: "$235",
    },
    {
      title: "Air Jordan 11 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/910538-1200-auto?v=638956399397230000&width=1200&height=auto&aspect=true",
      price: "$300",
    },
    {
      title: "Air Jordan 12 Retro",
      image: "https://nikeco.vtexassets.com/arquivos/ids/893949-1200-auto?v=638899413824270000&width=1200&height=auto&aspect=true",
      price: "$280",
    },
    {
      title: "Air Jordan 13 Retro",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2b522cd8-2752-439f-ba93-64f1d1237207/AIR+JORDAN+13+RETRO.png",
      price: "$260",
    },
    {
      title: "Air Jordan 14 Retro",
      image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/efb25a4b-46f9-41cb-8e52-3e935292b3b2/AIR+JORDAN+14+RETRO.png",
      price: "$265",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="xl">

        <Typography variant="h4" fontWeight={700} mb={4} color="white">
          Artículos
        </Typography>

        <Grid container spacing={4} justifyContent="center">

          {products.map((product, index) => (

            <Grid item key={index}>

              <Card sx={{ width: 350, height: 450, backgroundColor: "#1e1e1e" }}>

                <Box sx={{ width: "100%", height: 220 }}>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <Box sx={{ p: 2, color: "white" }}>

                  <Typography fontWeight={600}>
                    {product.title}
                  </Typography>

                  <Typography sx={{ opacity: 0.7 }}>
                    Men's Shoes
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {product.price}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, mt: 2 }}>

                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => addToCart(product)}
                      sx={{
                        backgroundColor: "#9e9e9e",
                        "&:hover": { backgroundColor: "#757575" }
                      }}
                    >
                      Comprar
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={
                        esFavorito(product.title)
                          ? <FavoriteIcon />
                          : <FavoriteBorderIcon />
                      }
                      onClick={() => agregarFavorito(product)}
                      sx={{
                        backgroundColor: "#ff3d3d",
                        "&:hover": { backgroundColor: "#d32f2f" }
                      }}
                    >
                      Favorito
                    </Button>

                  </Box>

                </Box>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
};