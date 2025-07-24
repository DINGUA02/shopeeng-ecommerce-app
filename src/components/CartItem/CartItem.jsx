
import style from './CartItem.module.css';

const CartItem = ({item, handleRemoveItem, handleUpdateQty}) => {
    const {title, price, image, quantity, id} = item;
    const itemTotal = (price * quantity);





    return (
        <>
        <div className={style.CartItemCard}>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div className={style.CartItemDetails} >
                <h3>{title}</h3>
                <div className={style.PriceContainer}>
                    <p>
                        {Math.ceil(price).toLocaleString('en-PH', {
                        style: 'currency',
                        currency: 'PHP',
                        })}
                    </p>

                    <div className={style.QuantityBtnContainer} >
                        <button onClick={() => handleUpdateQty(id, quantity - 1)}disabled={quantity <= 1}> - </button>
                        <p>{quantity}</p>  
                        <button onClick={() => handleUpdateQty(id, quantity + 1)}> + </button>
                    </div>
                </div>
                <p>
                   Total: {Math.ceil(itemTotal).toLocaleString('en-PH', {
                    style: 'currency',
                    currency: 'PHP',
                    })}
                </p>
                <div className={style.BtnContainer}>
                    <button  className={style.CheckoutBtn} onClick={() => {alert(`${title} succesfully checked-out!`)}}>Checkout</button>
                    <button onClick={() => {handleRemoveItem(id)}}>Remove Item</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItem;