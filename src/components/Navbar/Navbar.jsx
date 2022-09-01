import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	// MenuItem,
	// Menu,
	Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../asset/logo.png";

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar>
					<Typography
						component={Link}
						to='/'
						variant='h6'
						color='inherit'
						className={classes.title}>
						<img
							src={logo}
							alt='Tech-Shop'
							height='25px'
							className={classes.image}
						/>
						E-STORE
					</Typography>
					<div className={classes.grow} />
					{location.pathname === "/" && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to='/cart'
								arial-label='Show cart items'
								color='inherit'>
								<Badge
									badgeContent={totalItems ? totalItems : ""}
									color='secondary'>
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
