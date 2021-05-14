import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";


function Header() {

  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [userDetails, setUserDetails] = useState([]);
  const [toggle, setToggle] = useState(false)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  const checkLogin = () => {
    if (user) {
      history.replace("/orders")
    } else {
      history.replace("/login")
    }

  }

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

  const Toggle = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <div className="header">

      <div className="menu-toggle" onClick={Toggle}><img src="/menu.png" alt="" /></div>

      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        <nav className={toggle ? "active" : "notactive"}>
          <ul>
            <li>
              <a href={!user && "/login"}>
                <div onClick={handleAuthentication} className="header__option">
                  <span className="header__optionLineOne">{user ? "Hello " + userDetails.name : 'Hello Guest'}</span>
                  <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" onClick={checkLogin} >
                <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">Orders</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.primevideo.com">
                <div className="header__option">
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header__optionBasket mt-1">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
