import React from 'react';
import './CartItem.css';
import{Link} from 'react-router-dom';
import {updateQuantity,removeFromCart} from '../redux/actions/ProductActions'
import {useSelector,useDispatch} from 'react-redux';

const CartItem = () => { 
    
    const upQuantity=(id, e )=>{
        let qty = e.target.value;
        dispatch(updateQuantity(id, qty));
    }
    const dispatch = useDispatch();
    const getcartItem=useSelector(state=>state.cart.products);
    const getallcartItem=getcartItem.length > 0 ? getcartItem.map((elem)=>{
        return(
            <div className="cartitem" key={elem.id}>
            <div className="cartitem__image">
                <img width="120" height="80" src={elem.src} alt=""/>
            </div> 
                <Link to={`/product/${elem.id}`} className="cartitem__name">
                    <p>{elem.productname}</p>
                </Link>
                <p className="cartitem__price">$ {elem.price}</p>
          
                <select className="cartitem__select" onChange={(e)=>upQuantity(elem.id , e)}>
                
                        <option value="">{elem.qty}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button className="cartitem__deleteBtn" onClick={()=>dispatch(removeFromCart(elem.id))}>
        
                        <i className="fas fa-trash"></i>
                    </button>
            </div>
        )
    }):<div>Empty Cart</div>;
    
    return (
    //  
    <div>
    {getallcartItem}
    </div>
    )
}

export default CartItem
