import './SideDrawer.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
const SideDrawer = ({show,click}) => {
  const state = useSelector(state => state.cart);
  let {products} =  state;
    const SideDrawerClass=["sidedrawer"];
    if(show){
        SideDrawerClass.push("show");
    }
    return (
        <div className={SideDrawerClass.join(" ") }>
              <ul className="sidedrawer__links" onClick={click}>
       <li>
       <Link to='/cart' className="sidecart__link">
       <i class="fas fa-shopping-cart"></i>
       <span>
       Cart
          <span className="sidedrawer__cartbadge">{products === undefined  ? 0 : products.length}</span>
       </span>
       
        </Link>
    
       </li>
       <li>
         <Link to="/">Shop</Link>
       </li>
     </ul>
  
        </div>
    )
}

export default SideDrawer;
