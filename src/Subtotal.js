import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();

    const checkUser = () => {
        if(user){
            history.push('/payment')
        }else{
            history.replace("/login")
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" name="" id=""/>
                            This Order Contain a Gift
                        </small>
                    </> 
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            {}
            
            <button onClick={checkUser}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
