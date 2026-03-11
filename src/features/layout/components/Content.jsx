import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Contexts
import { useCart } from "../../view/hooks/CartContext";
import { useFavorites } from "../../view/hooks/FavoritesContext";

export const Content = () => {
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const products = [
    {
      title: "Air Jordan 4 Retro (Imperial Purple)",
      price: "$240",
      image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_434,c_limit/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62fc581f-9c6a-4c3a-aec3-9faf44f7188b/AIR+JORDAN+4+RETRO.png",
    },
    {
      title: "Air Jordan 1 Mid",
      price: "$180",
      image:
        "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/61fc5cf5-0233-4aeb-b610-f8194c0e3235/AIR+JORDAN+1+MID.png",
    },
    {
      title: "Air Jordan 4 Retro",
      price: "$260",
      image:
        "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bebd2861-e25b-4c1e-8b91-a2a0b89ca46e/WMNS+AIR+JORDAN+4+RETRO.png",
    },
    {
      title: "Jordan Franchise",
      price: "$70",
      image:
        "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3f2f312-bfdf-46c8-a4b2-2f576bb27541/JORDAN+FRANCHISE+SLIDE+%28GS%29.png",
    },
    {
      title: "Jordan Spizike Low",
      price: "$210",
      image:
        "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eb06ab88-866e-47c3-957b-f7516af0b98a/JORDAN+SPIZIKE+LOW.png",
    },
    {
      title: "Tatum 4",
      price: "$195",
      image:
        "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3e330306-79b2-47e6-8399-2c16d5fae041/JORDAN+TATUM+4.png",
    },
  ];

  const handleFavorite = (product) => {
    if (isFavorite(product.title)) {
      removeFavorite(product.title);
    } else {
      addFavorite(product);
    }
  };

  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 350, md: 500 },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://www.digitalavmagazine.com/wp-content/uploads/2017/11/Advanced-Air-Jordan-Store-Toronto-8.jpg"
          alt="Presentación"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            px: 3,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
          >
            Bienvenido a Jordan Quality Store
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mt: 2,
              textShadow: "1px 1px 8px rgba(0,0,0,0.7)",
            }}
          >
            Explora una amplia variedad de productos y disfruta de una
            experiencia moderna y segura.
          </Typography>
        </Box>
      </Box>

      {/* PRODUCTOS */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid key={index}>
              <Card
                sx={{
                  width: 350,
                  height: 450,
                  overflow: "hidden",
                  boxShadow: 4,
                  backgroundColor: "#1e1e1e",
                }}
              >
                {/* IMAGEN */}
                <Box
                  sx={{
                    width: "100%",
                    height: 220,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* INFO */}
                <Box
                  sx={{
                    flex: 1,
                    width: "100%",
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    px: 2,
                    py: 2,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    {product.title}
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.6 }}>
                    Men's Shoes
                  </Typography>

                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {product.price}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => addToCart(product)}
                      sx={{
                        backgroundColor: "#9e9e9e",
                        "&:hover": { backgroundColor: "#757575" },
                      }}
                    >
                      Comprar
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={isFavorite(product.title) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      onClick={() => handleFavorite(product)}
                      sx={{
                        backgroundColor: "#ff3d3d",
                        "&:hover": { backgroundColor: "#d32f2f" },
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