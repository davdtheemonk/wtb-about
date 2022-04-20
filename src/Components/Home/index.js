import React from 'react'
import "./styles.css"
import Started from "../Started"
import Faqs from "../Faqs"
import Waitlist from "../Waitlist"
import Footer from '../Footer'
import { BrowserRouter } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"

export default function Home(){
    return(
       < BrowserRouter >
        <div className="home__cont_over">
        <div className="home__cont">
            <div className="home__text">
                <div className="home__text_txt">
                <h2>Get to know us </h2>
                <p>Ask any questions </p>

                <h4 className="home__future">We are revolutionizing tech education</h4>
                <p>Join our waitlist as a patner or investor</p>
                </div>
                <img className="home__pic"src="writer.svg"/>
                
            </div>
            <div className="home__image">

            </div>
            </div>
            
            <div className="home__btns">
           
            <Link to="#started" smooth><button className="home_startbtn">Get Started</button></Link>
                <Link to="#wait" smooth><button className="home_startbtn">Join Waitlist</button></Link>
                <Link to="#faq" smooth>  <button className="home_startbtn">FAQ</button></Link>
                
                </div>
               
                <Started/>
                <Faqs/>
                <Waitlist/>
                <Footer/>
        </div>
        </BrowserRouter>
    )
}