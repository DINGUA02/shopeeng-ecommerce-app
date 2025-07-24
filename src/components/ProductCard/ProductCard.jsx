import { useState } from 'react';

import style from './ProductCard.module.css';

const ProductCard = ({product, cartItem, handleAddToCart}) => {
    const [quantity, setQuantity] = useState(1);
    const [confirmation, setConfirmation] = useState('');
    const {id, title, price, image, description} = product;
    const itemInCart = cartItem.find(item => item.id === id);

    const increaseQty = () => {
        setQuantity(previousQty => previousQty + 1);
    }
    const decreaseQty = () => {
         if (quantity > 1) setQuantity(previousQty => previousQty - 1);
    }
       

    return (
        <>
          <div className={style.ProductCard}>
                <div className={style.ProductImageContainer}>
                    <img src={image} alt={title}/>
                </div>
                <div className={style.ProductCardDetails} >
                    <h3>{title}</h3>
                    <p>"{description}"</p>
                    <p> {Math.ceil(price).toLocaleString('en-PH', {
                        style: 'currency',
                        currency: 'PHP',
                    })}</p>

                    <div className={style.QuantityBtnContainer} >
                        <button onClick={decreaseQty}> - </button>
                        <h3>{quantity}</h3>  
                        <button onClick={increaseQty}> + </button>
                    </div>
                    <button onClick={
                        () => {handleAddToCart(product, quantity);
                        setQuantity(1);
                        setConfirmation(`${title} has been added to your cart`);

                        setTimeout( () => {setConfirmation('')}, 1500);
                        }}
                        disabled={itemInCart}>{itemInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                    <p>{confirmation}</p>
                </div>
                
        </div>
        </>
    )
}

export default ProductCard;