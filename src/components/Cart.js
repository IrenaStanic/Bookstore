import { useDispatch, useSelector } from "react-redux";
import { toggleCart,  incrementalItem, decrementalItem, deleteItem, deleteAllItems } from "../store/reducer/cartSlice";
const Cart = ()=>{
    const {cartItems, isCartOpen} = useSelector((state)=>state.cart);

    const itemQuantities = cartItems.reduce((quantities, item) =>{
        const { ISBN } = item;
        quantities[ISBN] = (quantities[ISBN] || 0) + 1;
        return quantities;
    }, []);
    
    const total = parseFloat(cartItems.reduce((acc, num)=>(acc+ (num.price.displayValue * num.quantity)),0)).toFixed(2);
     
    const dispatch = useDispatch();
    const handleOpenCart = (open)=>{
        dispatch(toggleCart(open));
    };
    const handleDecremental = (ISBN) =>{
        dispatch(decrementalItem(ISBN));
    };
    const handleIncremental = (ISBN) =>{
        console.log(ISBN);
        console.log('ISBN u pocetnoj fji');
            dispatch(incrementalItem(ISBN));
    };
    const hendleDelete = (ISBN)=>{
        dispatch(deleteItem(ISBN));
    };
    const handleDeleteAll = () => {
        dispatch(deleteAllItems());
    }

    return(<>
    {isCartOpen && (
        <div id="cart">
            <div className="cart_content">
                <div className="cart_head">
                    <h2>Cart</h2>
                    <div className="close_btn" onClick={()=>handleOpenCart(false)}>
                        <span>&times;</span>
                    </div>
                </div>
                <div className="cart_body">
                    {Object.keys(itemQuantities).length === 0 ? (<h2>The cart is empty</h2>):(
                        <div>
                            {cartItems.map(item=>{
                                const {ISBN, title, image, price, quantity, id} = item;
                                const itemTotal = quantity * price.displayValue;
                                return(
                                    <div className="book_card" key={id}>
                                        <figure className="cart_img">
                                            <img src={image}  alt={title}></img>
                                         </figure>
                                         <div className="cart_item_title">
                                          {title}
                                        </div>
                                        <div className="cart_item_price">
                                        {itemTotal} {price.currency}
                                        </div>
                                        <div className="cart_item_quantity">
                                            <span onClick={()=>handleDecremental(ISBN)}>-</span>  
                                            {quantity} 
                                            <span onClick={()=>handleIncremental(ISBN)}>+</span>
                                        </div>
                                        <div>
                                            <button className="bton" onClick={()=>hendleDelete(ISBN)}>Delete</button>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="btF">
                                <button className="bton" onClick={()=>handleDeleteAll()}>Delete All</button>
                            </div>
                            <div>
                                <p>Total: {total}EUR </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )}
    </>)
}
export default Cart;