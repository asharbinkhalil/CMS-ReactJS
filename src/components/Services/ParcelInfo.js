import React, { useState } from "react";
import "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/app.css";
import { db } from "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/firebase";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {  Container } from "react-bootstrap";


const Parcel = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [volume, setVolume] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [color, setColor] = useState("");
  const [delivery, setDelivery] = useState("");
  const [sensitive, setSensitive] = useState("");
  const [, setLoader] = useState(false);


  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Parcel")
      .add({
        id:makeid(),
        weight: weight,
        height: height,
        width: width,
        volume: volume,
        type: type,
        color: color,
        delivery: delivery,
        sensitive: sensitive,
      })
      .then(() => {
        setLoader(false);
        alert("Your info has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setId("");
    setWeight("");
    setHeight("");
    setWidth("");
    setVolume("");
    setType("");
    setColor("");
    setDelivery("");
    setSensitive("");
  };

  return (
   <> <br></br> <br></br> <br></br> <br></br>
<Container
      className="d-flex align-items-center justify-content-center"
     style={{borderRadius: "20px", maxHeight: "80vh",minHeight: "50vh",minWidth: "20vh", backgroundImage:`url(${"https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"})`}}
    >
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="text-center card-header header text-white bg-dark mb-4">Parcel Information</h3>
      <form
        id="contactForm"
        className="contactForm"
        onSubmit={handleSubmit}
      ></form>
      
      <div className="col-md-14">
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="weight"
            placeholder="Weight in kg" required
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          />
        </div>
      </div>
      <div className="col-md-14">
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="height"
            placeholder="Height" required
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
        </div>
      </div>
      <div className="col-md-14">
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="width"
            placeholder="Width" required
            onChange={(e) => setWidth(e.target.value)}
            value={width}
          />
        </div>
      </div>

      <div className="col-md-14">
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="volume"
            placeholder="Volume" required
            onChange={(e) => setVolume(e.target.value)}
            value={volume}
          />
        </div>
      </div>

      <div className="col-md-14">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="type"
            placeholder="Document / Package" required
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </div>
      </div>

      <div className="col-md-14">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="color"
            placeholder="Color" required
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </div>
      </div>
      <label class="text-success">Normal Parcel Delivery or urgent Delivery?</label>
      
      <div className="col-md-14">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="delivery"
            placeholder="Delivery Type" required
            onChange={(e) => setDelivery(e.target.value)}
            value={delivery}
          />
        </div>
      </div>

      <label class="text-danger">In case of sensitive material</label>
      

      <div className="col-md-14">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="sensitive"
            placeholder="Special Instructions" required
            onChange={(e) => setSensitive(e.target.value)}
            value={sensitive}
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
      <Link to="/sender-info" className="btn btn-dark btn-block">Move to SenderInfo</Link>
    </form>
    </Container>
    <br></br>  <br></br> <br></br> <br></br>
    </>
  );
};

export default Parcel;