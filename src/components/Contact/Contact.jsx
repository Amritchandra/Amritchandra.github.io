//import React from 'react'
import "./Contact.css"
import Phone from './contactImages/Phone.png'
import Email from './contactImages/x.png'
import LinkedIn from './contactImages/LinkedIn.png'
import Github from './contactImages/y.png'

function Contact() {

    const sendto = (link) => {
        window.open(
            link,
            "_blank"
        );
    }
//
    return (
        <div id='contact'>
            <h1>Contact Me</h1>
            <div>
                <div id="contact-github" className='contactCard' onClick={() => { sendto("https://github.com/Amritchandra") }}>
                    <img src={Github} alt="" />
                    <h5>Github</h5>
                    <p>AmritChandraKumar</p>
                </div>
                <div id="contact-linkedin" className='contactCard' onClick={() => { sendto("https://www.linkedin.com/in/amrit-chandra-kumar-dev/") }}>
                    <img src={LinkedIn} alt="LinkedIn" />
                    <h5>Linkedin</h5>
                    <p>AmritChandraKumar</p>
                </div>
                <div id="contact-email" className='contactCard'>
                    <img src={Email} alt="email" />
                    <h5>Email</h5>
                    <p>amritchandrakumar123@gmail.com</p>
                </div>
                <div id="contact-phone" className='contactCard'>
                    <img src={Phone} alt="phone no" />
                    <h5>Phone</h5>
                    <p>+91 8102343042</p>
                </div>
            </div>
        </div>
    )
}

export default Contact