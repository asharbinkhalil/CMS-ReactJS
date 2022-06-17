import React from "react"
import { db } from "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/firebase";
import { useState } from 'react';
import { Card } from "react-bootstrap";
import tr2 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/tr3.jpg'
const MapContainer = () => {
	const [parcel, setparcel] = useState([]);
	const [type, setType] = useState("");
	window.addEventListener('load', () => {
		Fetchdata();

	});

	const Fetchdata = () => {
		db.collection("Parcel").get().then((querySnapshot) => {
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
			</center>
			<div class="card-group">
				<div class="card">

					{
						parcel.map((data) => (
							(data.id === "Nrkla") ?
								<Frame
									id={data.id}
								/> : <div></div>
						))
					}
				</div></div>
		</div>



	);
}

const Frame = ({ id }) => {

	return (
		<div>

			<Card style={{ width: "20rem", height: "21rem", borderRadius: "20px" }}
			>
				<Card.Img style={{ width: "20rem", height: "21rem", borderRadius: "20px" }}
					variant="top"
					src={tr2}
				/>
				<Card.Body>
					<div classmessage="div">
						<button className="btn btn-success btn-block mx-8">Parcel Information</button>
						<button className="btn btn-dark btn-block mx-8">ID : {id}</button>

					</div>
				</Card.Body>
			</Card>
		</div>


	);
}





export default MapContainer;
