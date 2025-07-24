import { useState, useEffect } from 'react';

import API_URL from '../utilities/constants';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadInitialProducts = async () => {
    try {
      const result = await fetch( API_URL );
      const products = await result.json();

      if( products ){
        setProducts( products );
      }
    } catch (error) {
      setError( error?.message );
    } finally {
      setLoading( false );
    }
  }

  useEffect(()=> {
    loadInitialProducts();
  }, []);

  return { products, setProducts, loading, error }
}

export default useProducts;