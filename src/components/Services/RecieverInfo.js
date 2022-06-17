import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { db } from "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/firebase";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const RecieverInfo = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [house, setHouse] = useState("");
    const [street, setStreet] = useState("");
    const [sector, setSector] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("RecieverInfo")
            .add({
                name: name,
                contact: contact,
                house: house,
                street: street,
                sector: sector,
                city: city,
                country: country,
            })
            .then(() => {
                setLoader(false);
                alert("SENDER info has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setCountry("");
        setHouse("");
        setStreet("");
        setSector("");
        setCity("");
        setCountry("");
    };

    return (
        <><br></br><br></br><br></br><br></br>
        <Container
      className="d-flex align-items-center justify-content-center"
     style={{ borderRadius: "20px",maxHeight: "80vh",minHeight: "50vh",minWidth: "20vh", backgroundImage:`url(${"https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"})`}}
    >
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="text-center card-header header text-white bg-dark mb-4">Sender Information</h3>
            <form
                id="contactForm"
                className="contactForm"
                onSubmit={handleSubmit}
            ></form>
            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Full Name" required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
            </div>
            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        contact="contact"
                        placeholder="Contact No" required
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}
                    />
                </div>
            </div>
            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        house="house"
                        placeholder="House No" required
                        onChange={(e) => setHouse(e.target.value)}
                        value={house}
                    />
                </div>
            </div>

            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        street="street"
                        placeholder="Street No" required
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                    />
                </div>
            </div>

            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        sector="sector"
                        placeholder="Sector" required
                        onChange={(e) => setSector(e.target.value)}
                        value={sector}
                    />
                </div>
            </div>

            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        city="city"
                        placeholder="City" required
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </div>
            </div>
            <div className="col-md-14">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        country="Country"
                        placeholder="Country" required
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                    />
                </div>
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    value="SUBMIT"
                    className="btn btn-dark"
                />
            </div>
            <Link to="/transcript" className="btn btn-dark btn-block">Generate Trascript</Link>
        </form>
        </Container>
        <br></br> <br></br> <br></br><br></br>
        </>
    );
};

export default RecieverInfo