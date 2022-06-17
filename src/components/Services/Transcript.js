import React from "react"
import { db } from "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/firebase";
import { useState } from 'react';
import { Card } from "react-bootstrap";
import amg4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/crd.jpg'
import tr2 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/tr3.jpg'
import tr4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/tr4.jpg'
import abc from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/abc.gif'
const Transcript = () => {
	const [parcel, setparcel] = useState([]);
	const [sender, setsender] = useState([]);
	const [reciever, setreciever] = useState([]);
	window.addEventListener('load', () => {
		Fetchdata();
		Fetchsender();
		Fetchreciever();
	});

	const Fetchdata = () => {
		db.collection("Parcel").get().then((querySnapshot) => {
			querySnapshot.forEach(element => {
				var data = element.data();
				
				setparcel(arr => [...arr, data]);
			});
		})
	}

	const Fetchsender = () => {
		db.collection("SenderINFO").get().then((querySnapshot) => {
			querySnapshot.forEach(element => {
				var data = element.data();
			
				setsender(arr => [...arr, data]);
			});
		})
	}
	const Fetchreciever = () => {
		db.collection("RecieverInfo").get().then((querySnapshot) => {
			querySnapshot.forEach(element => {
				var data = element.data();
			
				setreciever(arr => [...arr, data]);
			});
		})
	}



	return (
		<div>
			<center>

				{Fetchdata}
				{Fetchsender}
				{Fetchreciever}



			</center>
			<div class="card-group">

				<div class="card"style={{ borderRadius: "20px"}}>
					{
						parcel.map((data) => (
							<Frame
								id={data.id}
								height={data.height}
								message={data.weight}
								width={data.width}
								color={data.color}
								delivery={data.delivery}
								sensitive={data.sensitive}
								type={data.type}
							/>
						))
					}
				</div>
				<div class="card">

					{
						sender.map((data) => (
							<Framesender
								name={data.name}
								city={data.city}
								country={data.country}
								house={data.house}
								street={data.street}
								sector={data.sector}
								contact={data.contact}
							/>

						))
					}

				</div>
				<div class="card">

					{
						reciever.map((data) => (
							<Framereciever
								name={data.name}
								city={data.city}
								country={data.country}
								house={data.house}
								street={data.street}
								sector={data.sector}
								contact={data.contact}
							/>

						))
					}

				</div>
				<div class="card">
				
			
				<img style={{  height: "45rem",borderRadius: "20px" }}class="card-img-top" src={abc} alt="Card  cap"></img>
            <div class="card-body">


				<p>Your order is on the way, We will reach you soon.</p>
				</div>

				</div>


			</div>
		</div>

	);
}

const Frame = ({ id,color, delivery, height, sensitive, type, weight, width }) => {
	return (
	
		<Card style={{ borderRadius: "20px" }}
		>
			<Card.Img style={{  height: "21rem",borderRadius: "20px" }}
				variant="top"
				src={tr2}
			/>
			<Card.Body>
				<div classmessage="div">
				<button className="btn btn-success btn-block mx-8">Parcel ID: {id}</button>
					<button className="btn btn-dark btn-block mx-8">Height : {height}</button>
					<button className="btn btn-dark btn-block mx-8">Weight : {weight}</button>
					<button className="btn btn-dark btn-block mx-8">Width : {width}</button>

					<button className="btn btn-dark btn-block mx-8">Color : {color}</button>
					<button className="btn btn-dark btn-block mx-8">Delivery TYPE : {delivery}</button>
					<button className="btn btn-dark btn-block mx-8">Is Sensitive : {sensitive}</button>
					<button className="btn btn-dark btn-block mx-8">Type : {type} </button>
				</div>
			</Card.Body>
		</Card>
	);
}


const Framesender = ({ name, city, country, house, street, sector, contact }) => {
	return (
		<Card style={{ borderRadius: "20px" }}>
			<Card.Img style={{ height: "21rem",borderRadius: "20px" }}
				variant="top"
				src={amg4}
			/>
			<Card.Body>
				<div classmessage="div">
				<button className="btn btn-success btn-block mx-8">Sender Information</button>
					<button className="btn btn-dark btn-block mx-8">Name : {name}</button>
					<button className="btn btn-dark btn-block mx-8">City : {city}</button>
					<button className="btn btn-dark btn-block mx-8">Contact : {contact}</button>
					<button className="btn btn-dark btn-block mx-8">Country : {country}</button>
					<button className="btn btn-dark btn-block mx-8">House : {house}</button>
					<button className="btn btn-dark btn-block mx-8">Street : {street}</button>
					<button className="btn btn-dark btn-block mx-8">Sector : {sector}</button>
				</div>
			</Card.Body>
		</Card>
	);
}
const Framereciever = ({ name, city, country, house, street, sector, contact }) => {
	return (
		<Card style={{borderRadius: "20px" }}>
			<Card.Img style={{ height: "21rem",borderRadius: "20px" }}
				variant="top"
				src={tr4}
			/>
			<Card.Body>
				<div classmessage="div">
				<button className="btn btn-success btn-block mx-8 "> Reciever Information</button>
					<button className="btn btn-dark btn-block mx-8">Name : {name}</button>
					<button className="btn btn-dark btn-block mx-8">City : {city}</button>
					<button className="btn btn-dark btn-block mx-8">Contact : {contact}</button>
					<button className="btn btn-dark btn-block mx-8">Country : {country}</button>
					<button className="btn btn-dark btn-block mx-8">House : {house}</button>
					<button className="btn btn-dark btn-block mx-8">Street : {street}</button>
					<button className="btn btn-dark btn-block mx-8">Sector : {sector}</button>
				</div>
			</Card.Body>
		</Card>
	);
}


export default Transcript;
