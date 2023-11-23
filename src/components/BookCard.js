import { useDispatch } from "react-redux";
import { addItem } from "../store/reducer/cartSlice";  
import { toggleDetails } from "../store/reducer/detailSlice";  
import { Link } from "react-router-dom";
const Bookcard = (props) =>{

    const dispatch = useDispatch(); 
    const {title, author, image, price} = props;
    const handleAddToCart = () =>{
        const item = {...props};
        dispatch(addItem(item))
   };


   const handleOpenDetails = ()=>{
    const item = {...props};
    const isOpen = true;
    dispatch(toggleDetails({item,isOpen}));
    };
   return(
   <div className="book_card">
   
    
    <figure>
        <img src={image}  alt={title}></img>
    </figure>
    <h3 className="title_">{title}</h3>
    <h5 className="author">{author}</h5>
    <Link  onClick={handleOpenDetails} className="bton">Details</Link>
    <h6 className="price">{price.displayValue} {price.currency}</h6>
    <button className="bton" onClick={handleAddToCart}>Add to cart</button>
    
</div>)
    
}
export default Bookcard;