import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./footersyles";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "red",
				textAlign: "center",
				marginTop: "-10px"
			}}>
				Parcel Force: A Fast and Reliable Courier Management System
			</h1>
			<br></br>
			<br></br>
			<br></br>
			<Container>
				<Row>
					<Column>
						<Heading style={{
							color: "yellow"

						}} >About Us</Heading>
						<FooterLink href="https://wa.me/+923303511211?text=urlencodedtext">Call us on Whatsapp</FooterLink>
						<FooterLink href="https://www.google.com/maps/place/TCS/@33.66941,72.9988425,21z/data=!4m19!1m13!4m12!1m4!2m2!1d73.0759443!2d33.6277425!4e1!1m6!1m2!1s0x38df95ff36cdb0f1:0x7a23a103bfc137ff!2sTCS,+Islamabad+Arcade,+Shop+2,+G-11+Markaz,+G-11,+G+11+Markaz+G-11,+Islamabad,+Islamabad+Capital+Territory+44000!2m2!1d72.9987583!2d33.6694269!3m4!1s0x38df95ff36cdb0f1:0x7a23a103bfc137ff!8m2!3d33.6694269!4d72.9987583">Location</FooterLink>
						<FooterLink href="about">Our Mission</FooterLink>
					</Column>
					<Column>
						<Heading style={{
							color: "yellow"

						}}>Services</Heading>
						<FooterLink href="make-parcel">Place Order</FooterLink>
						<FooterLink href="contact-us">Feedback/Complaint</FooterLink>
						<FooterLink href="tracking">Track Order</FooterLink>
						<FooterLink href="gallery">Our Gallery</FooterLink>
					</Column>
					<Column>
						<Heading style={{
							color: "yellow"

						}}>Our Offices</Heading>
						<FooterLink href="#">Faislabad</FooterLink>
						<FooterLink href="#">Islamabad</FooterLink>
						<FooterLink href="#">Karachi</FooterLink>
						<FooterLink href="#">Lahore</FooterLink>
					</Column>
					<Column>
						<Heading style={{
							color: "yellow"
						}}>Social Media</Heading>
						<FooterLink href="http://www.facebook.com">
							<i className="fa fa-facebook">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-twitter">
								<span style={{ marginLeft: "10px" }}>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-youtube">
								<span style={{ marginLeft: "10px" }}>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;