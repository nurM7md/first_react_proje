import React, { useState } from 'react'
import data from '../data';
import img3 from "./../../assets/images/product_01.1.jpg";
import img9 from "./../../assets/images/product_01.1.jpg";
import img13 from "./../../assets/images/product_01.1.jpg";
import './Products.css';

const Category = () => {

    const [products, setProducts] = useState(data);
    const filtercategory =(categoryItem)=>{
        const result = data.filter((currentCategory)=>{
            return currentCategory.category == categoryItem;
        });
        setProducts(result);
       
    }


    return (
        <div className='category'>
            <div className='row'>
                <div className='col'>
                    <h1 >POPULAR FOOD</h1>
                    <div className="prodbtn">
                        <button onClick={()=> setProducts(data)}>All</button>
                        <button onClick={()=> filtercategory('burger')}><img src={img3} />Burger</button>
                        <button onClick={()=> filtercategory('pizza')}><img src={img9} />pizza</button>
                        <button onClick={()=> filtercategory('bread')}><img src={img13} />Bread</button>
                    </div>
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

export default Category
