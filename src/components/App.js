import React from "react"
import Signup from "./Authentication/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Authentication/Dashboard"
import Login from "./Authentication/Login"
import PrivateRoute from "./Authentication/PrivateRoute"
import ForgotPassword from "./Authentication/ForgotPassword"
import UpdateProfile from "./Authentication/UpdateProfile"
import menu from "./Design/Menu"
import Navbar from "./Design/Navbar"
import About from "./Design/About"
import MapContainer from "./Services/Tracking"
import crousel from "./Design/Gallery"
import ContactUs from "./Services/ContactUs"
import Footer from "./Design/footer"
import Parcel from "./Services/ParcelInfo"
import Transcript from "./Services/Transcript"
import MakeParcel from "./Services/MakeParcel"
import SenderInfo from "./Services/SenderInfo"
import ReceiverInfo from "./Services/RecieverInfo"
import AdminDashboard from "./Services/AdminDashboard"
import Queries from "./Services/Queries"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={menu} />
        <Route path="/gallery" component={crousel} />
        <Route path="/transcript" component={Transcript} />
        <Route path="/tracking" component={MapContainer} />
        <Route path="/about" component={About} />
        <div className="d-flex align-items-center justify-content-center" style={{ maxHeight: "900px", maxWidth: "400px" }}>
          <Route path="/queries" component={Queries} />
        </div>
       
        <Container
          className="d-flex align-items-center justify-content-center"
          // https://www.sunbeltcanada.com/kingston/wp-content/uploads/sites/17/2021/12/courier-services.jpg
          //https://img.freepik.com/free-vector/digital-online-shop-global-logistic-truck-van-scooter-black-yellow-delivery-phone-mobile-website-background-concept-location-shopping-food-shipping-box-3d-illustration-copy-space_255625-35.jpg?w=2000
          style={{ maxWidth: "250vh", maxHeight: "200vh", minHeight: "10vh", minWidth: "10vh", backgroundImage: `url(${"https://www.sunbeltcanada.com/kingston/wp-content/uploads/sites/17/2021/12/courier-services.jpg"})` }}
        >

          <div className="w-100" style={{ maxHeight: "900px", maxWidth: "400px" }}>

            <AuthProvider>
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/contact-us" component={ContactUs} />
                
                <Route path="/parcelinfo" component={Parcel} />
                <Route path="/make-parcel" component={MakeParcel} />
                <Route path="/sender-info" component={SenderInfo} />
                <Route path="/reciever-info" component={ReceiverInfo} />


              </Switch>
            </AuthProvider>
          </div>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App
