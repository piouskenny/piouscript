import React from "react";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/main.css";
import Navbar from "./components/navbar";
import Mypic from "./images/me2.JPG";
import Footer from "./components/footer";

function App() {
  return (
    <div className="text-light bg-dark text-center all-container">
      <Navbar />
      <div className="container p-5 ">
        <div>
          <img src={Mypic} alt="My Pic" className="Profile_picture" />
        </div>
        <h1 className="brand-name my-3">
          Hi, I'm <span className="myname">Piouskenny</span>{" "}
        </h1>

        <h3 className="brand-info">
          Providing <span className="underline">Solutions</span>
          <span className="d-block"> For Online Businesses,</span>
          boosting sales &rarr; Partnership
        </h3>

        <p className="mt-3 text-secondary skills">
          {" "}
          <span className="d-block">Web Developer X Graphics Designer.</span>
          My skills sets are ReactJS X Laravel PHP X Wordpress X Photoshop
        </p>

        <div className="my-3">
          <a href="https://wa.me/message/7W4DEZOLYW54K1">
            <button className="btn btn-success">Whatsapp Link &rarr;</button>
          </a>
        </div>

        <div className="social Links">
          <div className="row">
            {/* <div className="col-3 text-primary">
              <img src="https://icons8.com/icon/32323/instagram" alt="" class="w-25" />
              </div>
            <div className="col-3 text-info">
              <img src="https://icons8.com/icon/13963/twitter" alt="" class="w-25" />
            </div>
            <div className="col-3 text-danger">
              <img src="https://icons8.com/icon/63777/github" alt="" class="w-25" />
            </div>
            <div className="col-3 text-success">
              <img src="https://icons8.com/icon/kikR2jIn6485/slack-new" alt="" class="w-25" />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
