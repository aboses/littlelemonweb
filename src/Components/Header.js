import React from 'react';
import { Link } from 'react-router';
import bannerImg from '../images/restauranfood.jpg';

const Header= () => {
    return(
        <header className='header'>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant,</p>
                    <p> focused on traditional recipes served with amodern twist.</p>
                    <Link to="/booking"><button  aria-label='On Click'>Reserve a Table</button></Link>
                </div>
                

                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>
            </section>
        </header>
    )
}

export default Header;