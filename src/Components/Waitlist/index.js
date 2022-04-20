import React from 'react'
import "./styles.css"


export default function Waitlist(){
    return(
        <div className="waitlist__cont_over" id="wait">
            <div className="waitlist__cont">
                <img className="waitlist__pic" src="wait.svg"></img>
<div className="waitlist__form">
    <form className="form__wait">
        <h3>Join our Wait-list</h3>
        <input type="text" placeholder="FullName" required></input>
        <input type="email" placeholder='Email' required></input>
        <textarea type="text" placeholder="Your interest" rows="5" ></textarea>
        <button className="waitlist_btn" onClick={(e)=>e.preventDefault()}type="submit">SUBMIT</button>
    </form>
</div>
                
            </div>
        </div>
    )
}