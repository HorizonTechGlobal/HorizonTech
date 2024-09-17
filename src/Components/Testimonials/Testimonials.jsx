import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="NextIcon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="BackIcon"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User1" />
                <div>
                  <h3>Alex Johnson</h3>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <p>
                HorizonTech has truly transformed our operations. Their
                innovative solutions have streamlined our processes and
                significantly boosted our productivity. The team’s expertise and
                dedication were evident throughout the project. Highly
                recommended!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User2" />
                <div>
                  <h3>Maria Gomez</h3>
                  <span>New York, NY</span>
                </div>
              </div>
              <p>
                Working with HorizonTech has been a game-changer for our
                business. Their custom software development services exceeded
                our expectations, delivering a product that perfectly fits our
                needs. Their professionalism and support were outstanding from
                start to finish.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User3" />
                <div>
                  <h3>Raj Patel</h3>
                  <span>London, UK</span>
                </div>
              </div>
              <p>
                The cybersecurity solutions provided by HorizonTech have given
                us peace of mind. Their comprehensive approach to protecting our
                data and systems is top-notch. We feel confident that our
                digital assets are secure thanks to their expert team.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User4" />
                <div>
                  <h3>Li Wei</h3>
                  <span>Shanghai, China</span>
                </div>
              </div>
              <p>
                HorizonTech's digital transformation services have propelled our
                company into the future. Their innovative strategies and
                seamless integration have made a significant impact on our
                growth. Their team’s commitment and expertise have been
                invaluable to our success.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
