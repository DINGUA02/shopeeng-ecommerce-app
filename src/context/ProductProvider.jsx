import ProductContext from './ProductContext'

import useProducts from '../hooks/useProducts';

const ProductProvider = ({ children }) => {
  const { products, setProducts, error, loading } = useProducts();

  return (
    <ProductContext.Provider value={{ products, setProducts, error, loading }}>
      { children }
    </ProductContext.Provider>
  )
}

export default ProductProvider;