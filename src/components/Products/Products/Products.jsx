import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from "./styles";

// const products = [
//   { id: 1, name: "Shoes", desc: "Running Shoes", price: "$100" },
//   { id: 2, name: "Macbook", desc: "Apple Macbook", price: "$10" },
// ];
const Products = ({ products, handleAddToCart }) => {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justifyContent='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product handleAddToCart={handleAddToCart} product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
