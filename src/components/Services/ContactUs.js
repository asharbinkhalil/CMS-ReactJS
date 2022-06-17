import React, { useState } from "react";
import "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/app.css";
import { db } from "C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/firebase";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phnumber, setphnumber] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        phnumber: phnumber
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setphnumber("");
  };

  return (

    <form className="form" onSubmit={handleSubmit}>
   <h3 className="text-center card-header header text-white bg-dark mb-4">Contact Parcel Force for any queries</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone number"
        value={phnumber}
        onChange={(e) => setphnumber(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message or Inquiry"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;