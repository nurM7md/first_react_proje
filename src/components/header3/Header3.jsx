import React from 'react'
import head from './../../assets/images/network.png';
import person from './../../assets/images/ava-1.png';
import './Header3.css';


const Header3 = () => {
  return (
    <section className='header3'>
            <div className="container">
                <div className="col-md-6 head1">
                    <h4>Testimonials</h4>
                    <h2>What Our<span id='span3'> Costomers</span> Are Saying ??</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla. Voluptate 
                        officiis illo tenetur iure aspernatur distinctio
                         unde rem quo, dicta ducimus nihil praesentium 
                         vero incidunt dolorum! Harum, dolorum facilis.</p>

                    <img id='person'  src={person}  /> Ahmed Belal
                    
                  
                   
                </div>

                <div className="col-md-6">
                    <img id='head' src={head} title="head"></img>
                </div>

            </div>
        </section>
  )
}

export default Header3
