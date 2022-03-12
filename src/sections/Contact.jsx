import { gsap } from 'gsap';
import $ from 'jquery';

function handleButtonClick() {
  let timeLine = new gsap.timeline({
    paused: false,
  });

  timeLine
    .to('.button-send p', 0.6, {
      opacity: 0,
    })
    .to('.button-send', 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: '0px 0px 35px 7px #b204c2',
      delay: 0.25,
    })
    .to('.button-send', 0.1, {
      opacity: 0.5,
      background: '#414141',
    })
    .to('.button-send', 0, {
      width: 1,
      delay: 0.2,
    })
    .to('.button-send', 0.1, {
      boxShadow: '0px 0px 100px 55px #b204c2',
      y: 90,
      height: 100,
      delay: 0.23,
    })
    .to('.button-send', 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: '0px 0px 85px 17px #b204c2',
      delay: 0.2,
    })
    .to('.button-send', 0.1, {
      opacity: 0,
    })
    .to('.contact__thank', 1, {
      opacity: 1,
      delay: 0.3,
    });
}

function Contact() {

  const handleClick = (e) => {
    let chatid = "-637783358";
    let token = "5158689723:AAEcnIN76WP_F8gJSUk4rbh0K97qKbLE4VY";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let text = `Имя: ${name}\nEmail: ${email}\nMsg: ${message}`;

    
    if(name && email && message) {
      let z=$.ajax({
        type: "POST",  
        url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
        data: "parse_mode=HTML&text="+encodeURIComponent(text), 
        }); 
      handleButtonClick()
    } else {
      alert("Please enter your name, email and message.")
    }
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">⁃ Contact ⁃</h2>

        <form className="contact__form">
        <div className="contact__row">
          <div className="contact__col50">
            <input id="name" type="text" name="name" placeholder="Name" required />
          </div>
          <div className="contact__col50">
          <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              required
            />
          </div>
        </div>

        <div className="contact__row">
          <div className="contact__col100">
            <textarea
              id="message"
              placeholder="Message"
              name="msg"
              minLength="8"
              maxLength="230"
              required
            ></textarea>
          </div>
        </div>
        <div className="contact__send">
          <p className="contact__thank">Thank you!</p>
          <button className="button-send" type="submit" onClick={handleClick}>
            <p>Send</p>
          </button>
        </div>
      </form>
        
        <div className="contact__links">
          <span className="email">official@artteamnft.com</span>
          <a href="#" className="navbar__network"  target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 551.034 551.034"
              version="1.1"
              viewBox="0 0 551.034 551.034"
              xmlSpace="preserve"
            >
              <g>
                <linearGradient
                  id="XMLID_2_"
                  x1="275.517"
                  x2="275.517"
                  y1="4.571"
                  y2="549.72"
                  gradientTransform="matrix(1 0 0 -1 0 554)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#E09B3D"></stop>
                  <stop offset="0.3" stopColor="#C74C4D"></stop>
                  <stop offset="0.6" stopColor="#C21975"></stop>
                  <stop offset="1" stopColor="#7024C4"></stop>
                </linearGradient>
                <path
                  fill="url(#XMLID_2_)"
                  d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z"
                ></path>
                <linearGradient
                  id="XMLID_3_"
                  x1="275.517"
                  x2="275.517"
                  y1="4.571"
                  y2="549.72"
                  gradientTransform="matrix(1 0 0 -1 0 554)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#E09B3D"></stop>
                  <stop offset="0.3" stopColor="#C74C4D"></stop>
                  <stop offset="0.6" stopColor="#C21975"></stop>
                  <stop offset="1" stopColor="#7024C4"></stop>
                </linearGradient>
                <path
                  fill="url(#XMLID_3_)"
                  d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z"
                ></path>
                <linearGradient
                  id="XMLID_4_"
                  x1="418.306"
                  x2="418.306"
                  y1="4.571"
                  y2="549.72"
                  gradientTransform="matrix(1 0 0 -1 0 554)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#E09B3D"></stop>
                  <stop offset="0.3" stopColor="#C74C4D"></stop>
                  <stop offset="0.6" stopColor="#C21975"></stop>
                  <stop offset="1" stopColor="#7024C4"></stop>
                </linearGradient>
                <circle
                  cx="418.306"
                  cy="134.072"
                  r="34.149"
                  fill="url(#XMLID_4_)"
                ></circle>
              </g>
            </svg>
          </a>
          <a href="#" className="navbar__network" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 410.155 410.155"
              version="1.1"
              viewBox="0 0 410.155 410.155"
              xmlSpace="preserve"
            >
              <path
                fill="#76A9EA"
                d="M403.632 74.18a162.414 162.414 0 01-28.28 9.537 88.177 88.177 0 0023.275-37.067c1.295-4.051-3.105-7.554-6.763-5.385a163.188 163.188 0 01-43.235 17.862 11.02 11.02 0 01-2.702.336c-2.766 0-5.455-1.027-7.57-2.891-16.156-14.239-36.935-22.081-58.508-22.081-9.335 0-18.76 1.455-28.014 4.325-28.672 8.893-50.795 32.544-57.736 61.724-2.604 10.945-3.309 21.9-2.097 32.56a3.166 3.166 0 01-.797 2.481 3.278 3.278 0 01-2.753 1.091c-62.762-5.831-119.358-36.068-159.363-85.14-2.04-2.503-5.952-2.196-7.578.593-7.834 13.44-11.974 28.812-11.974 44.454 0 23.972 9.631 46.563 26.36 63.032a79.24 79.24 0 01-20.169-7.808c-3.06-1.7-6.825.485-6.868 3.985-.438 35.612 20.412 67.3 51.646 81.569a79.567 79.567 0 01-16.786-1.399c-3.446-.658-6.341 2.611-5.271 5.952 10.138 31.651 37.39 54.981 70.002 60.278-27.066 18.169-58.585 27.753-91.39 27.753l-10.227-.006c-3.151 0-5.816 2.054-6.619 5.106-.791 3.006.666 6.177 3.353 7.74 36.966 21.513 79.131 32.883 121.955 32.883 37.485 0 72.549-7.439 104.219-22.109 29.033-13.449 54.689-32.674 76.255-57.141 20.09-22.792 35.8-49.103 46.692-78.201 10.383-27.737 15.871-57.333 15.871-85.589v-1.346c-.001-4.537 2.051-8.806 5.631-11.712a174.776 174.776 0 0035.16-38.591c2.573-3.849-1.485-8.673-5.719-6.795z"
              ></path>
            </svg>
          </a>
          <a href="#" className="navbar__network" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid"
              viewBox="0 -28.5 256 256"
            >
              <path
                fill="#5865F2"
                d="M216.856 16.597A208.502 208.502 0 00164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0079.735 175.3a136.413 136.413 0 01-21.846-10.632 108.636 108.636 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 005.355 4.237 136.07 136.07 0 01-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="copyright">
          <span>
            © {new Date().getFullYear()}, ArtTeam. All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
}

export { Contact };
