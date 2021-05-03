import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <div className="checkout__container">
                <div className="checkout__left">
                    <div>
                        <h3 className="checkout__username">Hello {user ? user.email : 'Guest'}</h3>
                        <h2 className="checkout__title">
                            Shoping Basket
                        </h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
