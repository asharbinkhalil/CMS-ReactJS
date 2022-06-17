import React from "react";
import "./About.css";
import { FooterLink } from "./footersyles";
function About() {
  return (

    <div className="about">
      <h1>About Us</h1>
      <p>Hello, wishes from Parcel Force Courier Service.</p>
      <br />
      <p>
        From the time when Parcel Force Courier Services started its operations in 2001 in Pakistan with a small business idea that initiated its journey from 5 destinations by delivering letters and documents, is now transformed into a leading Logistics, Courier & Warehousing service provider across Pakistan, with over 700+ Express Centers, handling over 90 million packages a year, 1500+ Service Locations across Pakistan with 4000+ Vehicles fleet & over 2200 Destinations Worldwide, serving Proprietors Entrepreneurs, Small Medium Business Enterprises SME, Students, Individuals, Travelers, FMCGs, Transnational Companies, Large Business Corporations (Textile, Leather, & other sectors), Government Sectors, Non-Government Organizations & Foreign Missions to fulfill their Courier, logistics & Supply Chain needs.
      </p>
      <br />
      <p>
        With the dynamic approach of Tiger Force Management, towards constant transformation & digitalization of current operations processes at Tiger Force Courier Service . Enabling technologies such as Sensors, IOT, Data Analytics, Auto Sortation & Sort to light technology and robotics are being deployed into specialized applications. These technological advancements, the introduction of new systems, processes, tech teams, now making Tiger Force Courier Services, a leading digitalized Logistics & Courier Group.
      </p>
      <br />

      <h3>Browse through some of our videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1g2PQFTdQsc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nNuEnMgGPwc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uFZrfQtEXZQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        
      </div>
      <br></br>
      <br></br>
      <FooterLink style={{
							color: "green",
              fontSize:30
						}} href="https://wa.me/+923303511211?text=urlencodedtext">
        <i className="fa fa-whatsapp">
          <span style={{ marginLeft: "10px" }}>
            Contact us on WhatsApp
          </span>
        </i>
      </FooterLink >
      <br></br>
      <br></br>
      <FooterLink style={{
							color: "red",
          fontSize:30
						}} href="https://www.google.com/maps/place/TCS/@33.66941,72.9988425,21z/data=!4m19!1m13!4m12!1m4!2m2!1d73.0759443!2d33.6277425!4e1!1m6!1m2!1s0x38df95ff36cdb0f1:0x7a23a103bfc137ff!2sTCS,+Islamabad+Arcade,+Shop+2,+G-11+Markaz,+G-11,+G+11+Markaz+G-11,+Islamabad,+Islamabad+Capital+Territory+44000!2m2!1d72.9987583!2d33.6694269!3m4!1s0x38df95ff36cdb0f1:0x7a23a103bfc137ff!8m2!3d33.6694269!4d72.9987583	">
        <i className="fa fa-map">
          <span style={{ marginLeft: "10px" }}>
            Head Office Location
          </span>
        </i>
      </FooterLink>
    
     
    </div>
  );
}

export default About