import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../asset/logo.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <img
              src={logo}
              alt="Tech-Shop"
              height="25px"
              className={classes.image}
            />
            E-STORE
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton arial-label="Show cart items" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
