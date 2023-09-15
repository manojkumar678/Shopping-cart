import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, addItem, removeItem } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const cartProducts = useSelector((state) => state.cart);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);
    
    function checkCount(product){
        console.log("products=>" , product.id);
        console.log("cartProducts=>" ,cartProducts)
        return cartProducts.some((item)=>{
            if(product.id === item.id){
                return true;
            }
        })
        // return false;
    }
    function handelBtnPlus(id){
        dispatch(addItem(id));
   }
   function handelBtnMinus(id){
        dispatch(removeItem(id));
   }

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    {checkCount(product) ? <>
                        <button onClick={()=>{handelBtnMinus(product.id)}}>-</button>
                        {cartProducts.filter((item)=>  item.id ===product.id)[0].count}
                        <button onClick={()=>{handelBtnPlus(product.id)}}>+</button>
                    </>:
                    <button onClick={() => handleAdd({...product, count: 1})} className="btn">
                    Add to cart
                    </button>
                    }
                     
                </div>
            ))}
        </div>
    );
};

export default Products;
