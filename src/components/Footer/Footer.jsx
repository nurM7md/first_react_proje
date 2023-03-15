import React, { useState } from 'react'
import footer from './../../assets/images/res-logo.png';
import { RiSendPlaneLine } from 'react-icons/ri';
import './Footer.css'


const Footer = () => {

    const [email, setEmail] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        console.log(email);
    }


    return (
        
            <footer className='footer' >
            <div className='container'>
                <div className='row'>
                <div className='col-md-3 '>
                    <img src={footer} />
                    <h5>Tasty Treat</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipi</p>
                </div>
                <div className='col-md-3'>
                    <h5>Delivery Time</h5>
                    <p>Sunday Thursday</p>
                    <p>10:00 pm - 11:00 pm</p>
                    <p>Friday Suterday</p>
                    <p>OFF day</p>
                    <p></p>
                </div>
                <div className='col-md-3'>
                    <h5>Contact</h5>
                    <p>Location : Egypt - Mansourah</p>
                    <p>Phone : 0110973286</p>
                    <p>Email : ahmed@gmail.com</p>
                </div>
                <div className='col-md-3'>
                    <h5>NewsLetter</h5>
                    <p>Subscribe Our NewsLetter</p>

                    <form action='' onSubmit={onSubmit}>
                        <input type="email" placeholder='Enter Email' value={email} onChange={e =>setEmail(e.target.value) }  />
                      <button ><i id='send'><RiSendPlaneLine /></i></button>  

                    </form>
                </div>
                </div>
            </div>


        </footer>
   
    )
}

export default Footer
