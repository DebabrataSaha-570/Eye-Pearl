import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = (props) => {
    const selectedProducts = props.cart;
    let total = 0;
    for (const product of selectedProducts) {
        total = product.price + total;

    }
    const handleRemove = (event) => {
        console.log(event.target.parentNode.parentNode, 'clicked')
        event.target.parentNode.parentNode.remove()

    }
    return (
        <>
            <div>
                <h3>products added : {selectedProducts.length}</h3>
                <h5>Total Price: $ {total}</h5>
            </div>

            {
                selectedProducts.map(pd => (
                    <div className="  ">
                        <div className="d-flex mt-3 p-3 align-items-center eye-parl-cart">
                            <div className="w-25 pe-2 my-3 eye-parl-cart-product ">
                                <img className="img-fluid" src={pd.image} alt="" />
                            </div>

                            <p>{pd.productName}</p>
                            <h2 onClick={handleRemove} ><i class="fas fa-trash-alt"></i></h2>
                        </div>

                    </div>
                ))
            }

            <Link to="/checkout">
                <button className="btn btn-success my-5">Proceed to checkout</button>
            </Link>
        </>
    );
};

export default Cart;