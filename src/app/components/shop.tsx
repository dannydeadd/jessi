import React from 'react'
import Image from 'next/image'

const Shop = () => {
  return (
    <section className="w-full h-screen bg-[#d4d2d5]">
    <header>
        <ul>
            <i class="fa fa-shopping-cart">
            <span class="counter"></span>
            </i>
        </ul>
    </header>
    <div class="row">
        <div class="product">
            <div class="product_inner">
            <img src="http://wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png" width="300" />
            <p>Nike Air (Women)</p>
            <p>Size 7</p>
            <p>Price £199.99</p>
            <button>Add to basket</button>
            </div>
            <div class="product_overlay">
            <h2>Added to basket</h2>
            <i class="fa fa-check"></i>
            </div>
    </div>

        <div class="product">
            <div class="product_inner">
            <img src="http://wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png" width="300" />
            <p>Nike Air (Men)</p>
            <p>Size 10</p>
            <p>Price £99.99</p>
            <button>Add to basket</button>
            </div>
            <div class="product_overlay">
            <h2>Added to basket</h2>
            <i class="fa fa-check"></i>
            </div>
        </div>

        <div class="product">
            <div class="product_inner">
            <img src="http://wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png" width="300" />
            <p>Nike Air (Women)</p>
            <p>Size 8</p>
            <p>Price £399.99</p>
            <button>Add to basket</button>
            </div>
            <div class="product_overlay">
            <h2>Added to basket</h2>
            <i class="fa fa-check"></i>
            </div>
        </div>

        <div class="product">
            <div class="product_inner">
            <img src="http://wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png" width="300" />
            <p>Nike Air (Men)</p>
            <p>Size 11</p>
            <p>Price £299.99</p>
            <button>Add to basket</button>
            </div>
            <div class="product_overlay">
            <h2>Added to basket</h2>
            <i class="fa fa-check"></i>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Shop