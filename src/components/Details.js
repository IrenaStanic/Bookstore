import { useSelector, useDispatch } from "react-redux";  
import { toggleDetails } from "../store/reducer/detailSlice";

const Details = () => {
    const {  isDetailsOpen, detailItem } = useSelector((state) => state.detail);
    const dispatch = useDispatch();
    const handleOpenDetails = (close) => {
        dispatch(toggleDetails(close));
    } 

    return ( 
        <>
            {isDetailsOpen && ( 
                <div id="cart_detail">
                    <div className="detail_content">
                        <div className="cart_head">
                            <h2>{detailItem.title}</h2>
                            <div className="close_btn" onClick={() => { handleOpenDetails(false) }}>
                                <span>&times;</span>
                            </div>
                        </div>
                        <div className="cart_body"> 
                                        <div className="book_card" key={detailItem.ISBN}>
                                            <figure className="cart_img">
                                                <img src={detailItem.image} alt={detailItem.title}></img>
                                            </figure>
                                            <div className="cart_item_summary">
                                                {detailItem.summary}
                                            </div>
                                           
                                        </div> 
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Details;
