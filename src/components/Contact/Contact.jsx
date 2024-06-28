import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 text-center text-md-left">
            <span>BE IN TOUCH WITH US</span>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter your e-mail..." />
              <div className="input-group-append">
                <button className="btn btn-dark" type="button">JOIN US</button>
              </div>
            </div>
          </div>
          <div className="col-21 col-md-4  text-center ">
            <div className="icons d-flex justify-content-center ">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <GoogleIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
