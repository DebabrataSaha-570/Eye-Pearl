import React from 'react';
import { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleProductClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)

    };
    console.log('cart', cart);

    return (
        <>
            <section className="container my-5">
                <h2 className="text-center my-5 text-primary">Welcome to our shop</h2>
                <div className="row">
                    <div className="col-md-8 col-6 ">
                        <div class="row row-cols-1 row-cols-md-3 g-4">

                            {
                                products.map(product => <AllProducts handleProductClick={handleProductClick} key={product.id} product={product}> </AllProducts>)
                            }


                        </div>
                    </div>

                    <div className="col-md-4 col-6">
                        <Cart cart={cart} ></Cart>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;