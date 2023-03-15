import React, { Fragment } from "react";
import Header from "./Header";
import './Header.css';
import img1 from './../../assets/images/category-01.png';
import img2 from './../../assets/images/category-02.png';
import img3 from './../../assets/images/category-03.png';
import img4 from './../../assets/images/category-04.png';
import img5 from './../../assets/images/service-01.png';
import img6 from './../../assets/images/service-02.png';
import img7 from './../../assets/images/service-03.png';

const Home = () => {
    return (
        <Fragment>
            < Header />
            <section className="food">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 foo">
                            <img src={img1} title="img1" />
                            <h3>Fast Food</h3>
                        </div>
                        <div className="col-md-2 foo">
                            <img src={img2} title="img2" />
                            <h3>Pizza</h3>
                        </div>
                        <div className="col-md-2 foo">
                            <img src={img3} title="img3" />
                            <h3>Asian Food</h3>
                        </div>
                        <div className="col-md-2 foo">
                            <img src={img4} title="img4" />
                            <h3>Row Meat</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="head2">
                <div>
                    <h5>What We Serve??</h5>
                    <h1>just sit back at home</h1>
                    <h1>We Will <span>Take Care</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Dignissimos delectus </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Dignissimos delectus </p>
                </div>
                <div className="container">
                    <div className="row head3">
                        <div className="col-md-4">
                            <img src={img5} title="img1" />
                            <h3>Quick Delivery</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Dignissimos delectus </p>
                        </div>
                        <div className="col-md-4 ">
                            <img src={img6} title="img2" />
                            <h3>Super Dine In</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Dignissimos delectus </p>
                        </div>
                        <div className="col-md-4">
                            <img src={img7} title="img3" />
                            <h3>Easy Pick Up</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Dignissimos delectus </p>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>





    )
}



export default Home;