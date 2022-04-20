import React from 'react'
import "./styles.css"
import Started from "../Started"

export default function Faqs(){
    return(
        <div className="faqs__cont_over" id="faq">
             <div className="faqs__cont">
             <img className="faqs_pic2" src="question.svg"></img>
                 <h3>FAQs</h3>
                 <p>Well,people talk.</p>
                 <h6>Please submit your questions on the wait-list.</h6>
                 
                </div>
                
             <img className="faqs_pic" src="question.svg"></img>


        </div>
    )
}