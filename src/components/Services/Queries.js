import React from "react"
import { db } from "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/firebase";
import { useState } from 'react';
import { Card } from "react-bootstrap";

const Queries = () => {
	const [parcel, setparcel] = useState([]);
	window.addEventListener('load', () => {
		Fetchdata();
	});

	const Fetchdata = () => {
		db.collection("contacts").get().then((querySnapshot) => {
			querySnapshot.forEach(element => {
				var data = element.data();
				
				setparcel(arr => [...arr, data]);
			});
		})
	}
	return (
		<div>
			<center>

				{Fetchdata}
			


				<div class="card"style={{ borderRadius: "20px"}}>
					{
						parcel.map((data) => (
							<Frame
								name={data.name}
								contact={data.phnumber}
								email={data.email}
								message={data.message}
								
							/>
						))
					}
				</div>

			</center>
		

				
				
				


		</div>

	);
}

const Frame = ({ name,contact,email,message }) => {
	return (
	
		<Card  className="d-flex align-items-center justify-content-center" style={{ borderRadius: "20px" }}
		>
			<Card.Body>
				<div classmessage="div">
				<button className="btn btn-success btn-block mx-8">Query Information</button>
					<button className="btn btn-dark btn-block mx-8">Name : {name}</button>
					<button className="btn btn-dark btn-block mx-8">Phone Number : {contact}</button>
					<button className="btn btn-dark btn-block mx-8">Email : {email}</button>

					<button className="btn btn-dark btn-block mx-8">Message/Query : {message}</button>
				</div>
			</Card.Body>
		</Card>
	);
}
export default Queries;
