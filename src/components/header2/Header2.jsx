import React from 'react'
import {VscWorkspaceTrusted} from 'react-icons/vsc';
import head from './../../assets/images/location.png';
import './Header2.css';

const Header2 = () => {
    return (
        <section className='header2'>
        <div className="container">
            <div className="col-md-7">
                <img src={head} title="head"></img>
            </div>

            <div className="col-md-5 head1">
                <h2> Why <span id='span2'>Tasty Treat ??</span> </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat expedita vitae sequi, magnam nobis illo eius cumque
                     eum voluptate sint quam ipsam tempora architecto minus dolor quia iure,
                      porro officia.</p>
                
                <div>
                    <p><i><VscWorkspaceTrusted />Fresh and Tasty food</i></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <p><i><VscWorkspaceTrusted />Quality Support</i></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <p><i><VscWorkspaceTrusted />Order From Any Location</i></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
            </div>

            
        </div>
        </section>


    )
}

export default Header2

