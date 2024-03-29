import React from "react";
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@material-ui/core";
import useStyles from "./style";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {
	const classes = useStyles();

	return (
		<Card className='cart-item'>
			<CardMedia
				image={item.image.url}
				alt={item.name}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant='h4'>{item.name}</Typography>
				<Typography variant='h5'>
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button
						type='button'
						size='small'
						onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
						-
					</Button>

					<Typography>&nbsp;{item.quantity}&nbsp;</Typography>
					<Button
						type='button'
						size='small'
						onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
						+
					</Button>
				</div>
				<Button
					onClick={() => handleRemoveFromCart(item.id)}
					variant='contained'
					type='button'
					color='secondary'>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
