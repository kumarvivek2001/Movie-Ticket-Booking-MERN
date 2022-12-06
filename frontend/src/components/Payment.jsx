import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from "react-router-dom";




const MySwal = withReactContent(Swal);

function App() {
	const publishableKey =
		'pk_test_51MC0eOSAWesH71sJmrdSG6TteE6hdbWDLB8tvX49GgqDMTwWyiv30IxXiJ91j6g2xX4bsm5jkjtoL3bggsXYoYiC006zrzjbwu';
	const navigate = useNavigate();
	const [ticket, setticket] = useState({
		name: 'Movie Ticket',
		price: 150,

	});

	const priceForStripe = ticket.price * 100;

	const handleSuccess = () => {
		MySwal.fire({
			icon: 'success',
			title: 'Payment was successful',
			time: 4000,

		}); navigate("/eticket");
	};
	const handleFailure = () => {
		MySwal.fire({
			icon: 'error',
			title: 'Payment was not successful',
			time: 4000,
		}); navigate("/bookinghistory");
	};
	const payNow = async token => {
		try {
			const response = await axios({
				url: 'http://localhost:3000/payment',
				method: 'post',
				data: {
					amount: ticket.price * 100,
					token,
				},
			});
			if (response.status === 200) {
				handleSuccess();
			}
		} catch (error) {
			handleFailure();
			console.log(error);
		}
	};

	return (
		<>
			<div className="back">
				<a href="/bookticket"><button type="button" className="btn btn-secondary text-white"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;Back</button></a>
			</div>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="card1 my-4 p-3">
						<div className="row main">
							<div className="col-12"><span>Movie Ticket Payment Details</span>&nbsp;&nbsp;&nbsp;&nbsp;</div>
						</div>

						<div className="row justify-content-center mrow">
							<div className="col-12">
								<img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="35px" height="35px" />
								<img src="https://img.icons8.com/color/48/000000/visa.png" width="35px" height="35px" />
								<img src="https://img.icons8.com/color/48/000000/paypal.png" width="35px" height="35px" />
							</div>
						</div>
						<StripeCheckout
							stripeKey={publishableKey}
							label="Pay Now"
							name="Pay With Credit/ Debit Card"
							billingAddress
							shippingAddress
							amount={priceForStripe}
							description={`Your total is INR${ticket.price}`}
							token={payNow}
						/>
					</div>
				</div>
			</div>

		</>
	);
}

export default App;

