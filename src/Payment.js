import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { db } from './firebase';
import "./Payment.css";
import PayPal from "./PayPal";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const total = getBasketTotal(basket);

    const [checkout, setCheckout] = useState(false);

    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user.uid)
                .collection('user_details')
                .orderBy("email", "desc")
                .onSnapshot(snapshot => (
                    snapshot.docs.map(doc => (
                        setUserDetails({
                            email: doc.data().email,
                            name: doc.data().name,
                            mobile: doc.data().mobile
                        })
                    ))
                ))
        } else {
            setUserDetails([])
        }
    }, [user])

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout {<Link to="/checkout">({basket?.length} items) </Link>}
                </h1>

                <div className="payment__section row">
                    <div className="payment__title col-md-3">
                        <h3>Delivery Details</h3>
                    </div>
                    <div className="payment__address col-md-8">
                        <p>Email: {user?.email}</p>
                        <p>Name: {userDetails.name}</p>
                        <p>Mobile: {userDetails.mobile}</p>
                    </div>
                </div>

                <div className="payment__section row">
                    <div className="payment__title col-md-3">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment__items col-md-8">
                        {basket.map(item => {
                            return (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="payment__section row">
                    <div className="payment__title col-md-3">
                        <h3>Payment methode</h3>
                    </div>
                    <div className="payment__details col-md-8">
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: <span className="payment__price">{value}</span></h3>
                                )}
                                decimalScale={2}
                                value={total}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            {checkout ?
                                (<PayPal />) : (
                                    <button onClick={() => setCheckout(true)}>
                                        Buy Now
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Payment
