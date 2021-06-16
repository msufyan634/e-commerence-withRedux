import {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ProductScreen.css'
import {useDispatch} from 'react-redux';
import CartData from "./CartData";
import { addToCart } from "../redux/actions/ProductActions";



const ProductScreen = () => {
    const [state, setstate] = useState({
        data:{}
    })
const {productId}=useParams();
const dispatch = useDispatch();
const getProduct = CartData.filter((items)=>{
    return items.id ===+productId;
})

useEffect(() => {
    const getProduct = CartData.filter((items)=>{
        return items.id ===+productId;
    })
  setstate((state)=>({...state , data:getProduct[0]}))

}, [CartData]);
    return (
        <div className="productscreen">
         <div className="productscreen__left">
         <img className="left__img" src={state.data.src} alt=""/>
         <div className="left__info">
             <p className="left__name">{state.data.productname}</p>
             <p className="">Price: $ {state.data.price}</p>
             <p className="desp"> <span className="description">Description:</span><br/><br/>{state.data.detail}</p>

         </div>
       
        </div>
        <div className="productscreen__right">
        <div className="right__info">
            <p>Price: <span>$ {state.data.price}</span></p>
            <p>Status: <span>In Stock</span></p>
            <p>
                Qty
                <select >
                    <option value="1">{state.data.qty}</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </p>
            <p>
                {/* <Link to={`/cart`}>Add To Cart</Link> */}
                <button type="button" onClick={()=>dispatch(addToCart(getProduct))}>Add To Cart</button>
            </p>
        </div>
            
        </div>
        </div>
    )
}

export default ProductScreen;
