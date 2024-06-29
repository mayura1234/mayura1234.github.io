// src/Portfolio.js

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    // Function to open the PDF file
    const openPDF = () => {
      window.open("assets/Mayura_Resume.pdf", "_blank");
    };

    // Function to apply twinkling effect on button click
    const twinklingEffect = () => {
      const pdfButton = document.getElementById("pdfButton");
      pdfButton.classList.add("twinkling-animation");

      // Remove twinkling effect after 2 seconds
      setTimeout(() => {
        pdfButton.classList.remove("twinkling-animation");
      }, 2000);
    };

    // Click event listener for the twinkling button
    document.getElementById("pdfButton").addEventListener("click", () => {
      openPDF();
      twinklingEffect();
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <header className="bg-light p-4">
        <div className="tab text-center">
          <img src="assets/my_photo.jpg" className="profile-photo" alt="Your Photo" />
          <h1 className="name-header">MAYURA P</h1>
          <p className="email">
            Email: <a href="mailto:mayurap1002@gmail.com" target="_blank" rel="noopener noreferrer">mayurap1002@gmail.com</a>
          </p>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/Mayura.p.Bhat"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mayura-p-872087239/"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/mayura_pelthaje/"><i className="fab fa-instagram-square"></i></a></li>
            <li><a href="https://x.com/Mayura_Pelthaje"><i className="fab fa-twitter-square"></i></a></li>
          </ul>
          <button id="pdfButton" className="btn btn-primary twinkling-btn">View PDF</button>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container-line">
                <h4 style={{ fontFamily: "'Times New Roman', Times, serif" }}>CAREER OBJECTIVE:</h4>
                <p style={{ fontFamily: "'Courier New', Courier, monospace", textAlign: "justify" }}>
                  Intend to work with a leading research and development firm in demanding and challenging roles, thereby gaining relevant industry exposure and developing expertise in software development and consulting. Also, to strike a common chord between the organization's objective and self through a symbiotic relationship that captures versatility, excellence, and passion to grow in the future.
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="container-line">
                <h4 style={{ fontFamily: "'Times New Roman', Times, serif" }}>ACADEMIC DETAILS:</h4>
                <p style={{ fontFamily: "'Courier New', Courier, monospace", textAlign: "justify" }}>
                  <strong>University :</strong> Visvesvaryya Technological University, Belagavi<br />
                  <strong>College :</strong> Vivekananda College of Engineering and Technology, Puttur<br />
                  <strong>Degree:</strong> Master of Computer Applications<br />
                  <strong>Year of Graduation:</strong>2023<br />
                </p>
              </div>
            </div>

            <div className="col-md-12 text-center">
              <div className="container">
                <h2 style={{ fontFamily: "'Courier New', Courier, monospace", textAlign: "center" }}>PROJECTS:</h2>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-light p-5" id="some">
          <div className="container">
            <div id="imageCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <img src="assets/durga.png" className="d-block w-100 img-with-border img-desktop" alt="Durga Builders" />
                      <div className="text-center mt-2 mb-2">
                        <button onClick={() => scrollToSection("section1")} className="btn btn-primary">Durga Builders</button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src="assets/lrhr.png" className="d-block w-100 img-with-border img-desktop" alt="Image resolution improvisation" />
                      <div className="text-center mt-2 mb-2">
                        <button onClick={() => scrollToSection("section2")} className="btn btn-primary">Image resolution improvisation</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <img src="assets/volcano.png" className="d-block w-100 img-with-border img-desktop" alt="Volcano Analysis" />
                      <div className="text-center mt-2 mb-2">
                        <button onClick={() => scrollToSection("section3")} className="btn btn-primary">Volcano Analysis</button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src="assets/pgr.png" className="d-block w-100 img-with-border img-desktop" alt="Grievance redressal web app" />
                      <div className="text-center mt-2 mb-2">
                        <button onClick={() => scrollToSection("section4")} className="btn btn-primary">Grievance redressal web app</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more carousel items for additional photos */}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="section1">
          <div className="container">
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }}>Durga Builders and Environmental Solutions</h2>
            <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              Durga Builders and Environmental Services has adopted an uncompromising policy of providing quality housing and commercial/retail spaces over the last 37 years. Constantly evolving over four decades, Durga has pioneered new designs and introduced new building technologies with the sole aim of satisfying and delighting the customer. In turn, customers have handsomely rewarded us with unwavering loyalty and trust.
              Over the next few years Durga will expand its footprints into newer cities and bring to the customer more modern and sustainable buildings, while keeping its high standards of quality and ethical dealings unchanged.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <a href="https://mayura1234.github.io/durgabuilders/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Click here to open website</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="section2">
          <div className="container">
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }}>Image super-resolution</h2>
            <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              The project aims to develop a model which generates high definition images from the given image. The objective is to enhance the resolution and quality of low resolution image to generate attractive images with high resolution. The model is trained on a dataset of paired low and high resolution images.
            </p>
          </div>
        </section>

        <section className="section" id="section3">
          <div className="container">
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }}>Volcano Eruption analysis </h2>
            <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              Volcano Eruption analysis using multiple algorithms like decision tree, random forest, and clustering.
            </p>
          </div>
        </section>

        <section className="section" id="section4">
          <div className="container">
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }}>Post graduate grievances redressal web application </h2>
            <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              A platform for students to submit their grievances and track their resolution status.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-light p-4 text-center">
        <p>&copy; 2024 Mayura P. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
