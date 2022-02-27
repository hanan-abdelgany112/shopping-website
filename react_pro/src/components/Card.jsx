import React, { components } from 'react';
import '../style/Card.css';
import clothes1 from '../image/woman1.jpg';
import makeup10 from '../image/makeup10.jpeg';
import Watches3 from '../image/Watches3.jpeg';
import jewelry1 from '../image/jewelry1.jpeg';
function Card() {
 
        return(

<div className="container">
    <h1>Shopping Cart</h1>
         <div className="cart">            
            <div className="products">

                 <div className="product">
            <img src={clothes1} />
                   <div className="product-info">
                <h3 className="product-name">clothes</h3>
                <h4 className="product-price">₹ 1,000</h4>
                <h4 className="product-offer">50%</h4>
                <p className="product-quantity">
                    Qnt: 
                <input value="1" name="" />
                </p>
                <p className="product-remove">
                    <span className="remove">Remove</span>
                </p>
            </div>
        </div>

        <div className="product">
            <img src={makeup10} />
                   <div className="product-info">
                <h3 className="product-name">makeup</h3>
                <h4 className="product-price">₹ 1,000</h4>
                <h4 className="product-offer">50%</h4>
                <p className="product-quantity">
                    Qnt: 
                <input value="1" name="" />
                </p>
                <p className="product-remove">
                    <span className="remove">Remove</span>
                </p>
            </div>
        </div>


        <div className="product">
            <img src={Watches3} />
                   <div className="product-info">
                <h3 className="product-name">Watches</h3>
                <h4 className="product-price">₹ 1,000</h4>
                <h4 className="product-offer">50%</h4>
                <p className="product-quantity">
                    Qnt: 
                <input value="1" name="" />
                </p>
                <p className="product-remove">
                    <span className="remove">Remove</span>
                </p>
            </div>
        </div>


        <div className="product">
            <img src={jewelry1} />
                   <div className="product-info">
                <h3 className="product-name">jewelry</h3>
                <h4 className="product-price">₹ 1,000</h4>
                <h4 className="product-offer">50%</h4>
                <p className="product-quantity">
                    Qnt: 
                <input value="1" name="" />
                </p>
                <p className="product-remove">
                    <span className="remove">Remove</span>
                </p>
            </div>
        </div>

    </div>


    <div className="cart-total">
        <p>
            <span>Total Price</span>
            <span>₹ 3,000</span>
        </p>
        <p>
            <span>Number of Items</span>
            <span>2</span>
        </p>
        <p>
            <span>You Save</span>
            <span>₹ 1,000</span>
        </p>
        <a href="#">Proceed to Checkout</a>
    </div>
</div>

</div>
           

        )
    }

export default Card;