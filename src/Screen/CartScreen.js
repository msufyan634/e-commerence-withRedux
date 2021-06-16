import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import {useEffect , useState} from 'react'
const CartScreen = () => {
const [Tprice , setTprice] = useState(0);
  const getcartdata=useSelector(state=>state.cart.products.length);
  const getprice=useSelector(state=>state.cart.products);
  const getallprice=getprice.map((elem)=>{
    const id=elem.id;
    const price=elem.price;
    const qty=elem.qty;
      return{
        id,price,qty
      } 
    
  });
  console.log("get id,price and qty ",getallprice);
  useEffect(() => {
    const totalprice=getallprice.reduce((accu,elem)=>{
      const tPrice=+elem.price * +elem.qty;
      console.log("total price",tPrice);
      const prices= +accu + +tPrice ;
      return prices; 
    
    },0);
     setTprice(totalprice)
  }, [getprice])
 
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem />

      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <div className="subtotal">
            <p>subtotal ({getcartdata>0 ? getcartdata:0}) items</p>
              <p>$ {Tprice}</p>
          </div>
          <div className="checkout">
            <Link>Proceed To Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
