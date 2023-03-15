import React, { useState } from 'react'
import pizzaData from '../pizzaData';


const Category2 = () => {
    const [products, setProducts] = useState(pizzaData);

    return (
       
        <div>
            <div className='row'>
                <div className='products2'>
                    <h1 >Hot Pizza</h1>
                </div>
            </div>
            <div className='row'>

                <section className="products">

                    {products.map(product =>

                        <div key={product.id}>
                            <img src={product.img} />
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <button>{product.button}</button>
                        </div>
                    )}
                </section>
            </div>

        </div>
    )
}

export default Category2
