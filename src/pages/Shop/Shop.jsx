import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import style from './Shop.module.css';
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

import ProductContext from '../../context/ProductContext.js';

const Shop = ({cartItem, setCartItem}) => {
    const { products, setProducts, error, loading } = useContext( ProductContext );
    

    const handleAddToCart = (product, quantity) => {
        setCartItem(previousItem => [...previousItem, {...product, quantity}]);
    };

    if (error) {
        return <Navigate to="/login" />;
    }

    if( loading ){
        return (<>{'Loading...'}</>)
    }

    return(
        <>
        <section className={style.ShopSection}>
            <Navbar />
            <h2 className={style.ShopTitle} >Products List</h2>
            {
                products && 
                products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    cartItem={cartItem} 
                    handleAddToCart={handleAddToCart}
                />))
            }
        </section>  
        </>
    )
}

export default Shop;