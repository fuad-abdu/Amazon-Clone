import React, { useEffect, useRef, useState } from 'react'
import "./Paypal.css"
import { useHistory } from 'react-router';
import { db } from './firebase';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function PayPal() {

    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const total = getBasketTotal(basket);
    const paypal = useRef();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    // let d = new Date();
    // let month = monthNames[d.getMonth()];
    // let year = d.getFullYear();
    // let date = d.getDate();
    // let hour = d.getHours();
    // let minute = d.getMinutes();

    // let timeStamp = month + ' ' + date + 'th ' + year + ', ' + hour + ':' + minute
    var date = new Date();

    var day = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    var hours = date.getHours();
    var minutes = date.getMinutes();

    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var strTime = month + ' ' + day + ' ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "",
                            amount: {
                                currency_code: "USD",
                                value: total,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();

                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(order.id)
                    .set({
                        basket: basket,
                        amount: total,
                        created: strTime
                    })

                dispatch({
                    type: 'EMPTY_BASKET'
                })

                history.replace('/orders')

                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            },
        })
            .render(paypal.current);
    }, []);

    return (
        <div>
            <div className="paypal" ref={paypal}></div>
        </div>
    )
}

export default PayPal
