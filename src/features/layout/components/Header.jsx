import * as React from "react";
import { NavLink, Link } from "react-router-dom";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

// MUI
import {
AppBar,
Toolbar,
Button,
Stack,
Typography,
Box,
TextField,
InputAdornment,
Badge,
IconButton,
Drawer,
List,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
useMediaQuery
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const Header = () => {

const [cartCount, setCartCount] = React.useState(0);
const [favoritesCount, setFavoritesCount] = React.useState(0);
const [search, setSearch] = React.useState("");
const [openMenu, setOpenMenu] = React.useState(false);

const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

React.useEffect(() => {

const updateCounters = () => {

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

setCartCount(cart.length);
setFavoritesCount(favoritos.length);

};

updateCounters();

window.addEventListener("cartUpdated", updateCounters);
window.addEventListener("favoritesUpdated", updateCounters);

return () => {
window.removeEventListener("cartUpdated", updateCounters);
window.removeEventListener("favoritesUpdated", updateCounters);
};

}, []);

const handleSearch = () => {

localStorage.setItem("search", search);
window.dispatchEvent(new Event("searchUpdated"));

};

const navItems = [

{ text: "Inicio", icon: <HomeIcon />, to: "/" },

{ text: "Artículos", icon: <ArticleIcon />, to: "/articles" },

{ text: "Ofertas", icon: <LocalOfferIcon />, to: "/offers" },

{ text: "Mi Cuenta", icon: <PersonIcon />, to: "/myaccount" },

{
text: "Favoritos",
icon: (
<Badge badgeContent={favoritesCount} color="error">
<FavoriteIcon />
</Badge>
),
to: "/myfavorites"
},

{
text: "Carrito",
icon: (
<Badge badgeContent={cartCount} color="error">
<ShoppingCartIcon />
</Badge>
),
to: "/cart"
}

];

return (
<>

<AppBar position="fixed" sx={{ backgroundColor: red[700] }}>

<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

{/* LOGO */}

<Typography
component={Link}
to="/"
sx={{
textDecoration: "none",
color: "white",
fontWeight: "bold",
fontSize: { xs: "1rem", md: "1.2rem" }
}}
>
Jordan Quality Store
</Typography>

{/* MENU DESKTOP */}

{!isMobile && (

<Stack direction="row" spacing={1}>

{navItems.map((item) => (

<Button
key={item.text}
component={NavLink}
to={item.to}
startIcon={item.icon}
sx={{
color: "white",
textTransform: "none",
fontSize: "0.85rem",

"&:hover": {
backgroundColor: "rgba(255,255,255,0.15)"
},

"&.active": {
backgroundColor: "rgba(255,255,255,0.15)"
}
}}
>
{item.text}
</Button>

))}

</Stack>

)}

{/* BUSCADOR */}

<Box
component="form"
onSubmit={(e) => {
e.preventDefault();
handleSearch();
}}
sx={{
display: { xs: "none", md: "flex" },
alignItems: "center",
backgroundColor: "white",
borderRadius: 3,
px: 2,
py: 0.5
}}
>

<TextField
size="small"
variant="standard"
placeholder="Buscar..."
value={search}
onChange={(e) => setSearch(e.target.value)}
InputProps={{
disableUnderline: true,
startAdornment: (
<InputAdornment position="start">
<SearchIcon />
</InputAdornment>
)
}}
/>

</Box>

{/* MENU MOBILE */}

{isMobile && (

<IconButton
color="inherit"
onClick={() => setOpenMenu(true)}
>

<MenuIcon />

</IconButton>

)}

</Toolbar>

</AppBar>

{/* DRAWER MOBILE */}

<Drawer
anchor="left"
open={openMenu}
onClose={() => setOpenMenu(false)}
>

<Box sx={{ width: 250 }}>

<List>

{navItems.map((item) => (

<ListItem key={item.text} disablePadding>

<ListItemButton
component={NavLink}
to={item.to}
onClick={() => setOpenMenu(false)}
>

<ListItemIcon>

{item.icon}

</ListItemIcon>

<ListItemText primary={item.text} />

</ListItemButton>

</ListItem>

))}

</List>

</Box>

</Drawer>

<Toolbar />

</>
);
};