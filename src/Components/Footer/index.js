import React from "react"
import "./styles.css"


export default function Footer(){
    return(<div className="course_footer_cont">
            
            <li className="footer">
              
            
            <ul><a href="" className="cours_footer_link">PRODUCTS</a>
            <div className="course_footer_contacts">
                <ul><a href="https://www.what-the-bug.tk/portal">Interactive Programming Courses</a></ul>
                <ul><a href="https://www.what-the-bug.tk/portal">Student Collab</a></ul>
                <ul><a href="https://www.what-the-bug.tk/portal">Live Coding Assessment</a></ul>
                </div></ul>
            <ul><a href="/documentation" className="cours_footer_link">RESOURCES</a>
            <div className="course_footer_contacts">
                <ul><a href="https://www.what-the-bug.tk">Blog</a></ul>
                <ul><a href="https://www.what-the-bug.tk/docs">Documenantion</a></ul>
                <ul><a href="https://www.what-the-bug.tk/community">Community</a></ul>
                </div></ul>
            <ul><a href="" className="cours_footer_link">ABOUT</a>
            <div className="course_footer_contacts">
                <ul><a href="">Pricing</a></ul>
                <ul><a href="">Terms of Use</a></ul>
                <ul><a href="">Help & FAQ</a></ul>


                </div></ul>
       
            <p className = "course_footer_copy">Copyright © 2022 </p>
            </li>
    </div>)
}