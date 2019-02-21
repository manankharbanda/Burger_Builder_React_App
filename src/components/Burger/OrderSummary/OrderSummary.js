import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary =  Object.keys(props.ingredients)
        .map(igkey => {return (
            <li key={igkey}>
                <span style = {{textTransform : "capitalize"}}>{igkey}</span>: {props.ingredients[igkey]}
        </li> );
        });

return(
<Aux>
    <h3>Order Summary</h3>
    <p>A delicious burger with following ingredients:</p>
    <ul>
        {ingredientSummary}
    </ul>
    <p>continue to checkout?</p>
    <Button clicked = {props.CancelPurchase} btnType = "Danger">CANCEL</Button>
    <Button clicked = {props.ContinuePurchase} btnType = "Success">CONTINUE</Button>
</Aux>
)    
}

export default OrderSummary;