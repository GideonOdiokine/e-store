import React, { useState, useEffect } from "react";
import {
	CssBaseline,
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping", "Payment details"];

const Checkout = ({ cart, handleCaptureCheckout, order }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [shippingData, setShippingData] = useState({});
	const classes = useStyles();

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, {
					type: "cart",
				});
				// console.log(token);
				setCheckoutToken(token);
			} catch (error) {}
		};
		generateToken();
	}, [cart]);

	const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
	const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	const next = (data) => {
		setShippingData(data);
		nextStep();
	};

	const Confirmation = () => (
		<>
			<div>Thank you for purchasing</div>
		</>
	);
	const Form = () =>
		activeStep === 0 ? (
			<AddressForm next={next} checkoutToken={checkoutToken} />
		) : (
			<PaymentForm
				backStep={backStep}
				nextStep={nextStep}
				checkoutToken={checkoutToken}
				shippingData={shippingData}
				onCaptureCheckout={handleCaptureCheckout}
			/>
		);
	return (
		<>
			<CssBaseline />
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? <Confirmation /> : <Form />}
				</Paper>
			</main>
		</>
	);
};

export default Checkout;
