import React from "react";
import "./App.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import Geoapi from "./Components/datosAPI/geoAPI";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Andalucia from "./Components/ComunidadesAutonomas/Comunidades";
import Andalucia1 from "./Components/ComunidadesAutonomas/Comunidades";
import Carta1 from "./Components/Cards/Card1";
import Carta2 from "./Components/Cards/Card2";
import Carta3 from "./Components/Cards/Card3";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logarse from "./Components/Login/Login";
import Registrarse from "./Components/Register/Register";
import Footeri from "./Components/Footer/Footer";
import Chats from "./Components/Chat/Chat";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "rgba(34,30,31,0.88)",
    color: "inherit",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "rgba(34,30,31,0.88)",
    color: "#ffffff",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "inherit",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Sobre Nosotros</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link id="app" to="/Login">
          Cuenta
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link id="app" to="/Register">
          Registrarse
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Tooltip title="CUENTA">
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </MenuItem>
      </Tooltip>
    </Menu>
  );

  return (
    <Router>
      <div className="App">
        <AppBar
          position="static"
          style={{ backgroundColor: "rgba(34,30,31,0.88)" }}
        >
          <Toolbar>
            <Link to="https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="#ffffff"
                aria-label="open drawer"
              >
                <HomeIcon />
              </IconButton>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Tooltip title="CUENTA">
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/Chat" exact></Route>
          <Route path="/Register" exact>
            <Registrarse></Registrarse>
          </Route>
          <Route path="/Login" exact>
            <Logarse></Logarse>
          </Route>
          <Route path="/:COM" exact></Route>
          <Route path="/" exact></Route>
        </Switch>
        {renderMobileMenu}
        {renderMenu}
        <div class="container p-4">
          <h1 style={{ textAlign: "center", color: "#d52349" }}>
            Restricciones Comunidades Autónomas, España
          </h1>
        </div>
        <div class="container-fluid content-row justify-content-center">
          <div class="row">
            <div class="col">
              <Carta1>
                <Geoapi></Geoapi>
              </Carta1>
            </div>
            <div class="col">
              <Carta2></Carta2>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <Footeri></Footeri>
    </Router>
  );
}

export default App;
