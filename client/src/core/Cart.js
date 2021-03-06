import React, { useEffect, useState } from 'react';
import '../styles.css'
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';

const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])


    const loadAllProducts = () => {
        return (
            <div>
                <h2>load products</h2>
                {products.map((product, index) => {
                    return (
                        <Card key={index}
                            product={product}
                            removeFromCart={true}
                            addtoCart={false}
                            setReload={setReload}
                            reload={reload}
                        />
                    )
                })}
            </div>
        )
    }

    const loadCheckout = () => {
        return (
            <div>
                <h2>load checkout</h2>
            </div>
        )
    }

    return (
        <Base title="Cart Page" description="Ready to checkout">
            <div className="row text-center">
                <div className="col-6">{loadAllProducts()}</div>
                <div className="col-6">{loadCheckout()}</div>

            </div>
        </Base>
    )
}
export default Cart;