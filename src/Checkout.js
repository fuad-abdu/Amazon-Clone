import React, { useEffect, useState } from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();
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
        <div className="checkout">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <div className="checkout__container row">
                <div className="checkout__left col-lg-8 col-md-7 col-sm-12">
                    <div>
                        <h3 className="checkout__username">Hello {user ? userDetails.name : 'Guest'}</h3>
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

                <div className="checkout__right col-lg-4 col-md-5 col-sm-12">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
