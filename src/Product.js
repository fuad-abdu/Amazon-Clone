import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

  const [{basket, user}, dispatch] = useStateValue();

  console.log(user);

  const addToBasket = () => {
    // dispatch the item into the datalayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p className="product__star">
              <StarIcon />
            </p>
          ))}

        </div>
      </div>
      <img
        src={image}
        alt=""
      />

      <button className="product__addToBasket" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
