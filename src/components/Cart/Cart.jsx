import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem";

const Cart = ({
	cart,
	handleRemoveFromCart,
	handleUpdateCartQty,
	handleEmptyCart,
}) => {
	const classes = useStyles();

	const EmptyCart = () => (
		<Typography variant='subtitle1'>
			You have no items in your shopping cart,
			<Link to='/' className={classes.link}>
				start adding some!
			</Link>
		</Typography>
	);

	const FilledCard = () => (
		<>
			<Grid container spacing={3}>
				{cart?.line_items?.map((line_item) => (
					<Grid item xs={12} md={6} lg={4} key={line_item.id}>
						<CartItem
							handleRemoveFromCart={handleRemoveFromCart}
							handleUpdateCartQty={handleUpdateCartQty}
							key={line_item.id}
							item={line_item}
						/>
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant='h4'>
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						onClick={handleEmptyCart}
						className={classes.emptyButton}
						size='large'
						type='button'
						variant='contained'
						color='secondary'>
						Empty Cart
					</Button>
					<Button
						component={Link}
						to='/checkout'
						className={classes.checkoutButton}
						size='large'
						type='button'
						variant='contained'
						color='primary'>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);

	if (!cart.line_items) return "Loading";
	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant='h4'>
				Your Shopping Cart
			</Typography>
			{!cart.line_items.length ? <EmptyCart /> : <FilledCard />}
		</Container>
	);
};

export default Cart;
