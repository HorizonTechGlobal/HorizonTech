import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e4cb2b85-1e0c-4f7f-ac16-5e7b072dff1c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} alt="MsgIcons" />
        </h3>
        <p>
          Have questions or need more information? We’re here to help! Reach out
          to us with your inquiries, and our team will get back to you as soon
          as possible. Your feedback and suggestions are always welcome.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="MailIcon" /> horizontechglobal@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="PhoneIcon" />
            +977 9860105823
          </li>
          <li>
            <img src={location_icon} alt="LocationIcon" />
            Sinamangal, Kathmandu
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="">Email/Phone No.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Email Or Phone Number"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          />
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit Now
            <img src={white_arrow} alt="WhiteArrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
