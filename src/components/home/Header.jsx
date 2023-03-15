import React from "react";
import './Header.css';
import head from './../../assets/images/hero.png';
import {AiFillCar} from 'react-icons/ai';
import {VscWorkspaceTrusted} from 'react-icons/vsc';

const Header = () => {
    return (

        <header>
            <div className="container">
                <div className="col-md-6 head1">
                    <h5> Easy way to make an order </h5>
                    <h2><span>HUNGRY?</span> just wait
                        food at <span>your door</span></h2>
                    <p>welcome to our restaurant . you can make your order
                        now or see our food then choose you can make your order
                        now or see our food then choose</p>
                    <button className="b1">Order Now</button>
                    <button className="b2">See All Food</button>
                    <div>
                     <i><AiFillCar/></i> No Shipping Fees
                   <i><VscWorkspaceTrusted/></i> 100% Secure CheckOut
                    </div>
                </div>

                <div className="col-md-6">
                    <img src={head} title="head"></img>
                </div>

            </div>
        </header>
    )
}

export default Header;