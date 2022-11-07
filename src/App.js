import mypic2 from "./Picture.jpg";
import Azure from "./images/Azure.png";
import Bootstrap from "./images/bootstrap.png";
import Csharp from "./images/csharp.png";
import cPlus from "./images/c++.png";
import java from "./images/java.jpg";
import php from "./images/php.jpg";
import pyhton from "./images/python.webp";
import html from "./images/html.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid mt-5">
        <nav className="navbar navbar-expand-lg fixed-top bg-secondary">
          <h2 className="navbar-brand text-light">
            <span className="text-warning">Pontsho</span>Kgoete
          </h2>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item">
                <a className="nav-link text-light " href="#home">
                  <i class="bi bi-info-circle px-1"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#about">
                  <i class="bi bi-info-circle px-1"></i>About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#skill">
                  <i class="bi bi-pc-display px-1"></i>Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#work">
                  <i class="bi bi-person-workspace px-1"></i> Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  <i class="bi bi-telephone px-1"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row introBackground" id="home">
          <div className="col-xl-6">
            <div className="card bg-dark cardTmargin">
              <div className="card-body">
                <h6 className="card-text text-light">
                  Hello,
                  <h2 className="card-title text-light"> I'M PONTSHO KGOETE</h2>
                </h6>
                <h5 className="text-light">AND</h5>
                <p className="text-light">
                  I COMPLETED MY STUDIES IN INFORMATION TECHNOLOGY SPECIALIZING
                  IN{" "}
                  <strong className="text-danger">
                    INTELLIGENT INDUSTRIAL SYSTEMS
                  </strong>{" "}
                  AT TUT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark pb-4">
        <div className="row">
          <div className="col-lg-6 order-md-2 order-lg-1 mt-5 image">
            <img
              src={mypic2}
              width={400}
              height={800}
              alt="Pontsho ina graduation gown"
            ></img>
          </div>

          <div className="col-lg-6 order-md-1 order-lg-2 mt-5 " id="about">
            <div className="card  bg-dark  ">
              <div className="card-title aboutTitle px-3">ABOUT ME</div>
              <div className="title Fields px-3">
                <span className="text-warning">Developer</span>
                <span className="text-danger">& Designer</span>
                <span className="text-warning"> & Robotics</span>
                <span className="text-danger"> & Electronics</span>
              </div>
              <div className="card-body text-light px-3">
                <p className="text-light aboutBody">
                  I am dedicated, focused, hardworking individual and always
                  keen on new challenges.<br></br>I am always ready to learn new
                  things and teach others what I know. I would like to have
                  <br></br> a place in a company that believes in the youth,
                  allow them to be flexible and bring their<br></br> ideas to
                  life. At university I gained experience in working with mobile
                  robots, <br></br>system automation and software development. I
                  got internship as a junior software developer<br></br> and it
                  was a great experience, and I learned a lot. I would like
                  apply and enhance my skills in<br></br> Artificial
                  intelligence, machine learning and software development
                  because I enjoy programming.
                </p>
                <h2>My Softskill</h2>
                <ul>Adaptive</ul>
                <ul>Patient</ul>
                <ul>Positive</ul>
                <ul>Good communication</ul>
                <ul>Time management</ul>
                <ul>Team Player</ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skill" className="mt-4">
        <h2 className="skillTitle text-light">Skills</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 border border-primary">
            <img
              src={Azure}
              alt="Azure Devops skill "
              className="skills "
            ></img>
          </div>
          <div className="col-lg-3 col-md-6 border border-danger ">
            <img src={java} alt="java skill " className="skills"></img>
          </div>
          <div className="col-lg-3 col-md-6 border border-success ">
            <img src={pyhton} alt="pyhton skill " className="skills"></img>
          </div>
          <div className="col-lg-3 col-md-6 border border-info ">
            <img src={html} alt="html skill " className="skills"></img>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 border border-secondary ">
            <img src={php} alt="Php Devops skill " className="skills"></img>
          </div>
          <div className="col-lg-3 col-md-6 border border-success ">
            <img
              src={Bootstrap}
              alt="Bootstrap skill "
              className="skills"
            ></img>
          </div>
          <div className="col-lg-3 col-md-6 border border-primary ">
            <img src={cPlus} alt="C++ skill " className="skills"></img>
          </div>
          <div className="col-lg-3 col-md-6 border border-danger">
            <img src={Csharp} alt="c# skill " className="skills"></img>
          </div>
        </div>
      </div>

      <div id="work" className=" mt-5">
        <h2 className="skillTitle text-light mb-4">Work</h2>

        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-dark">
              <div className="card-title">
                <h2 className="text-light">Software Development</h2>
              </div>
              <div className="card-body text-light">
                I can design the front-end of <br></br>a software and also do
                the coding<br></br>
                using bootstrap, Html and Css.
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-dark">
              <div className="card-title">
                <h2 className="text-light">Robotics</h2>
              </div>
              <div className="card-body text-light">
                I can implement robot circuits and also<br></br>
                code the robots. I mostly do my systems with<br></br>
                Raspberry pi and Arduino Uno
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-dark">
              <div className="card-title">
                <h2 className="text-light">Dev Ops</h2>
              </div>
              <div className="card-body text-light">
                During my internship I had the opportunity<br></br>
                to work on Azure Devops. where i learned about<br></br>
                being a scrum master.
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="mt-4">
        <h2 className="skillTitle text-light mb-4">Contact</h2>

        <div class="container  mt-5 ">
          <div class="row m-0">
            <div class="col-md-3 bg-warning p-0 d-flex text-center  justify-content-center flex-column display-none">
              <h3 class="mb-2">Contact Info</h3>
              <div class="info">
                <ul>
                  <li>
                    <i class="bi bi-envelope-plus px-2"></i>pkgoete.it@gmail.com
                  </li>
                  <li>
                    <i class="bi bi-telephone px-2"></i>0792684037
                  </li>
                </ul>
                <div class="social-icons"></div>
              </div>
            </div>
            <div class="col-md-8 p-0 bg-danger pt-4 pb-4">
              <h3 class="pl-4">Send a message</h3>
              <form class="w-100 p-4" action="#">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Full Name"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Email"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Message"
                        required
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block mt-3"
                >
                  Send Now
                </button>
              </form>
            </div>
            <div class="col-md-1 bg-white display-none ">
              <div class="social-icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-pinterest"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
