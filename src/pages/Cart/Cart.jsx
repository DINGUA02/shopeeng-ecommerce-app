
import style from './Cart.module.css';
import CartItem from "../../components/CartItem/CartItem";
import Navbar from '../../components/Navbar/Navbar';


const Cart = ({cartItem, setCartItem}) => {

    const handleRemoveItem = (id) => {
        setCartItem(previousItem => previousItem.filter(item => item.id !== id));
    }

    const handleUpdateQty = (id, newQty) => {
        setCartItem(previousItem => previousItem.map(item =>
            item.id === id ? {...item, quantity: newQty} : item
        ));
    }

    const grandTotal = cartItem.reduce((acc, currentItem) => {
        return acc + (currentItem.price * currentItem.quantity);
    }, 0);


    return(
        <>
        { cartItem == 0 ? 
            (<div className={style.EmptyCartSection}>
                <div>
                    <Navbar />
                </div>
                <h2>Your <span className={style.CardTitleColor} >Shopeeng</span> Cart is empty... 😔</h2>
            </div>) :
            (<div className={style.CartSection}>
                <Navbar />
                <h2 className={style.CartTitle}>This is your <span className={style.CardTitleColor}>Shopeeng</span> 🛒</h2>
                <div className={style.CartItemContainer}>
                    {cartItem.map(item => (
                        <CartItem 
                        key= {item.id} item={item} 
                        handleRemoveItem={handleRemoveItem}
                        handleUpdateQty={handleUpdateQty}
                        />
                    ))}
                </div>
                <div className={style.CheckOutContainer}>
                    <p>Total:{Math.ceil(grandTotal).toLocaleString('en-PH', {
                    style: 'currency',
                    currency: 'PHP',
                    })}</p>
                    <button className={style.CheckoutBtn} onClick={()=>{alert(`All items succesfully checked-out!`)}}>Checkout All Items</button>
                </div>
            </div>)
        
        }
        
        </>
    )
}

export default Cart;