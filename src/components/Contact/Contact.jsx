import React from 'react'
import './Contact.css'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
           <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>
          <div className="flexStart contactModes">
            <div className="flexColStart row">
                <div className="flexStart inside1">
                    <div className="flexCenter icon">
                        <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Call</span>
                        <span classNAme="secondaryText">012 234 567 440</span>
                    </div>
                </div>
                <div className="flexCenter button1">Call Now</div>
            </div>
            <div className="flexColStart row">
                <div className="flexStart inside1">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Chat</span>
                        <span className="secondaryText">012 234 567 440</span>
                    </div>
                </div>
                <div className="flexCenter button1">Chat Now</div>
            </div>

          </div>
          <div className="flexStart contactModes">
            <div className="flexColStart row">
                <div className="flexStart inside1">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Vedio Call</span>
                        <span classNAme="secondaryText">012 234 567 440</span>
                    </div>
                </div>
                <div className="flexCenter button1">Vedio Call Now</div>
            </div>
            <div className="flexColStart row">
                <div className="flexStart inside1">
                    <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Message</span>
                        <span className="secondaryText">012 234 567 440</span>
                    </div>
                </div>
                <div className="flexCenter button1">Message Now</div>
            </div>
            
          </div>


            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact