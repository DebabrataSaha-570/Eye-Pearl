import React from 'react';

const AllProducts = (props) => {
    const { productName, image, ratings, price, id, } = props.product


    return (
        <div class="col">
            <div class="card">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{productName}</h5>

                    <p class="card-text">Ratings:  {ratings}</p>
                    <p class="card-text">Price: $ {price}</p>
                    <button onClick={() => props.handleProductClick(props.product)} className="btn btn-primary">Add To cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;