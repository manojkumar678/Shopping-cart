import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, addItem, removeItem } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    const totalAmount = products.reduce((total, item)=>{
        return total + (item.price * item.count);
    },0)
    function handelBtnPlus(id){
         dispatch(addItem(id));
    }
    function handelBtnMinus(id){
         dispatch(removeItem(id));
    }
   

    return (
        <div>
            <h3>Cart</h3>
            <h3>Total Amount: {totalAmount.toFixed(2)}</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price * product.count}</h5>
                        <button onClick={()=>{handelBtnMinus(product.id)}}>-</button>
                        {product.count}
                        <button onClick={()=>{handelBtnPlus(product.id)}}>+</button>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
