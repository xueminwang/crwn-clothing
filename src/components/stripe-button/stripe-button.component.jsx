import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey='pk_test_51HkiIbJWro9iPyCUr5hI0R5hkiZxorAG2yXrq5wiM3zRGvv82M32karn1KAZqEGbYYeaQTAW6yqm5zFyTaaYMKyv00Oa5ztIRz';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    
    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
