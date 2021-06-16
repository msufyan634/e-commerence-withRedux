import "./HomeScreen.css";
import {useEffect} from 'react';
import CartData from "./CartData";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import { setproducts } from "../redux/actions/ProductActions";

const HomeScreen = () => {
      const dispatch=useDispatch();
    const fetchProducts = ()=>{
        dispatch(setproducts(CartData));
    }
  useEffect(() => {
 fetchProducts();
     
  },[]);
 
  const allproduct = CartData.map((elem) => {
    const { id, src, productname, detail, price } = elem;
    return (
      <div className="product" key={id}>
        <img src={src} alt="" />
        <div className="product__info">
          <p className="info__name">{productname}</p>
          <p className="info__description">{detail}</p>
          <p className="info__price">$ {price}</p>
          <Link to={`/product/${id}`} className="info__button">
            View
          </Link>
        </div>
      </div>
    );
  });
  console.log("allproducts",allproduct);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">{allproduct}</div>
    </div>
  );
};

export default HomeScreen;
