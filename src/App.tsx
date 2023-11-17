import { useState, useEffect, useRef } from "react";
import sticker from "./assets/layers.png";
import logo from "./assets/logo.png";
import picture from "./assets/mitchellpicture.jpg";
import agile from "./assets/icons8-agile-48.png";
import fitness from "./assets/mzh-fitness-landing-page-Copy.png";
import sedap from "./assets/sedap-landing-page.png";
import reciperover from "./assets/reciperover.png";

function App() {
  const [dog, setDog] = useState("");

  const dogData = async () => {
    const pic = `https://api.thedogapi.com/v1/images/search?limit=1&api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const response = await fetch(pic);
    if (response.ok) {
      const data = await response.json();
      setDog(data[0].url)
    }
  }

  const observer = useRef<IntersectionObserver | null>(null); // Initialize as null

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.current!.observe(el)); // Use the non-null assertion here

    // Cleanup the observer when the component unmounts
    return () => {
      if (observer.current) {
        hiddenElements.forEach((el) => observer.current!.unobserve(el));
      }
    };
  }, []);

  return (
    <>
      <div style={{ minHeight: "100vh" }} id="#">
        <header
          className="navbar fixed-top mx-auto p-3 header-shadow"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <a className="logo" href="#">
              <img
                src={logo}
                alt="portfolio logo"
                height={40}
                className="mb-2"
              />
              Mitchell Hamm
            </a>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link py-1 px-0 active"
                aria-current="page"
                href="#aboutme"
              >
                About Me
              </a>
              <a className="nav-link py-1 px-0" href="#skills">
                Skills
              </a>
              <a className="nav-link py-1 px-0" href="#projects">
                Projects
              </a>
              <a className="nav-link py-1 px-0" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main style={{ marginTop: "150px" }}>
          <section className="container-fluid row section-container p-5 mx-auto">
            <div
              className="col-12 col-lg-6 my-auto mx-sm-auto"
              style={{ marginLeft: "50px" }}
            >
              <p className="display-2" style={{ fontWeight: "300" }}>
                Welcome to My Portfolio
              </p>
              <p>
                Mitchell Hamm -{" "}
                <span style={{ color: "#72cdaa" }}>Full-Stack Engineer</span>
              </p>
              <a
                href="https://github.com/MitchellZH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-dark border-white"
              >
                Github
                <i className="fa-brands fa-github ms-2"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mitchell-hamm-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-dark border-white"
              >
                LinkedIn
                <i className="fa-brands fa-linkedin ms-2"></i>
              </a>
              <br />
              <a
                href="https://docs.google.com/document/d/1KjWbHEnRVznwy9Vj4aGxa_iAusvdQBU_hVtirLCxnZ4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-dark border-white"
              >
                Resume<i className="fa-solid fa-file ms-2"></i>
              </a>
              <button
                type="button"
                data-bs-toggle="modal"
                className="btn btn-lg btn-dark border-white"
                data-bs-target="#dogModal"
                onClick={() => {
                  dogData();
                }}
              >
                Dog API <i className="fa-solid fa-dog ms-2"></i>
              </button>
            </div>
            <div className="col-lg-5">
              <img
                className="mt-5"
                style={{ maxWidth: "100%" }}
                src={sticker}
                alt="software design sticker"
              />
            </div>

            <div
              className="modal fade"
              id="dogModal"
              tabIndex={-1}
              aria-labelledby="dogModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="dogModalLabel">
                      Here is a dog.
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={dog}
                      alt="random dog"
                      style={{ maxWidth: "100%", textAlign: "center" }}
                    />
                    <p className="mt-4">
                      I decided to make use of this API, because I am a major
                      dog enthusiast.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-lg btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="container hidden"
            id="aboutme"
            style={{ paddingTop: "220px" }}
          >
            <div className="row align-items-center py-5">
              <div className="col-12 col-lg-5 pb-5 pt-3 d-flex justify-content-center align-self-start">
                <img
                  src={picture}
                  className="d-block mx-sm-auto rounded img-fluid"
                  alt="Picture of Mitchell"
                />
              </div>
              <div className="col-lg-6 align-self-start">
                <h3 className="display-6 1h-1 mb-3">About Me.</h3>
                <p className="lead">
                  Hello! I'm a full-stack developer, that specializes in making
                  clean, scalable code. I make apps with many technologies,
                  including React, Flask, PostgreSQL, Firebase and more. My goal
                  is to contribute my technical skills to quality apps that
                  solve real world problems.
                </p>
              </div>
            </div>
          </section>
          <section
            className="container-fluid section-container"
            style={{ paddingTop: "160px" }}
            id="skills"
          >
            <div className="row d-flex flex-row py-5">
              <div className="col d-flex justify-content-center">
                <h3
                  className="display-6 fs-1 mb-3 hidden"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Skills
                </h3>
              </div>
            </div>
            <div className="row d-flex flex-row">
              <div className="col d-flex ms-5">
                <h4>
                  Frontend:{" "}
                  <span className="lead">
                    React, Typescript, JavaScript, HTML, CSS, Bootstrap, MUI
                  </span>
                </h4>
              </div>
            </div>
            <div className="row d-flex flex-row">
              <div className="col d-flex ms-5">
                <h4>
                  Database:{" "}
                  <span className="lead">PostgreSQL, MongoDB, Firebase</span>
                </h4>
              </div>
            </div>
            <div className="row d-flex flex-row">
              <div className="col d-flex ms-5">
                <h4>
                  Backend: <span className="lead">Python, Flask</span>
                </h4>
              </div>
            </div>
            <div className="row d-flex flex-row">
              <div className="col d-flex ms-5">
                <h4>
                  Others: <span className="lead">Git, Agile</span>
                </h4>
              </div>
            </div>
            <div className="row d-flex flex-row align-items-center">
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    alt="react"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/typescript.png"
                    alt="typescript"
                  ></img>
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/javascript.png"
                    alt="javascript"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
                    alt="python"
                    height={48}
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-flask-51-285137.png?f=webp"
                    alt="flask"
                    height={48}
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/html-5.png"
                    alt="html"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/css3.png"
                    alt="css"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png"
                    alt="bootstrap"
                    height={48}
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://mui.com/static/logo.png"
                    alt="material ui"
                    height={48}
                  />{" "}
                </div>
              </div>

              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/postgreesql.png"
                    alt="postgresQl"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/mongodb.png"
                    alt="mongoDB"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/firebase.png"
                    alt="firebase"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="git"
                    height={48}
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-center">
                <div
                  className="skills lead hidden"
                  style={{ backgroundColor: "#e4f2fa" }}
                >
                  <img src={agile} alt="agile" />
                </div>
              </div>
            </div>
          </section>
          <section
            className="container-fluid mt-3 pb-5 hidden"
            style={{ paddingTop: "160px" }}
            id="projects"
          >
            <div className="container">
              <div className="row d-flex flex-row py-5">
                <div className="col d-flex justify-content-center">
                  <h1
                    className="display-6 fs-1 mb-3"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Projects
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="card mb-3 px-0" style={{ maxWidth: "540px;" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={reciperover}
                        className="img-fluid rounded-start"
                        alt="picture of sedap landing page"
                      />
                    </div>
                    <div className="col-md-8 pe-1">
                      <div className="card-body">
                        <h5
                          className="display-6 mb-4"
                          style={{ fontSize: "1.75rem" }}
                        >
                          Recipe Rover
                        </h5>
                        <hr />
                        <h6>Technologies:</h6>
                        <p>
                          TypeScript, React, Material UI, Firebase, Spoonacular
                          API
                        </p>
                        <h6>Description:</h6>
                        <p>
                          This app allows users to search through and save
                          recipes after the've created an account. Users can
                          also upload a profile pic.
                        </p>
                        <a
                          href="https://reciperover.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            background: "#71cca9",
                            marginTop: "20px",
                            marginRight: "20px",
                            fontWeight: "500",
                          }}
                        >
                          Go To Website
                        </a>
                        <a
                          href="https://github.com/MitchellZH/Final/tree/main"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            background: "#ffcb37",
                            marginTop: "20px",
                            fontWeight: "500",
                          }}
                        >
                          Visit Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3 px-0" style={{ maxWidth: "540px;" }}>
                  <div className="row flex-row-reverse g-0">
                    <div className="col-md-4">
                      <img
                        src={fitness}
                        className="img-fluid rounded-start"
                        alt="picture of mzh fitness landing page"
                      />
                    </div>
                    <div className="col-md-8 pe-1">
                      <div className="card-body">
                        <h5
                          className="display-6 mb-4"
                          style={{ fontSize: "1.75rem" }}
                        >
                          MZH Fitness
                        </h5>
                        <hr />
                        <h6>Technologies:</h6>
                        <p>HTML, Material UI, React.js, and RapidAPI</p>
                        <h6>Description:</h6>
                        <p>
                          This is a fitness app built in React, that allows
                          users to search and filter through a vast database of
                          exercises with helpful info and videos about each one.
                        </p>
                        <a
                          href="https://mzh-fitness.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            background: "#71cca9",
                            marginTop: "20px",
                            marginRight: "20px",
                            fontWeight: "500",
                          }}
                        >
                          Go To Website
                        </a>
                        <a
                          href="https://github.com/MitchellZH/mzhfitness"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            background: "#ffcb37",
                            marginTop: "20px",
                            fontWeight: "500",
                          }}
                        >
                          Visit Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3 px-0" style={{ maxWidth: "540px;" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={sedap}
                        className="img-fluid rounded-start"
                        alt="picture of sedap landing page"
                      />
                    </div>
                    <div className="col-md-8 pe-1">
                      <div className="card-body">
                        <h5
                          className="display-6 mb-4"
                          style={{ fontSize: "1.75rem" }}
                        >
                          Sedap
                        </h5>
                        <hr />
                        <h6>Technologies:</h6>
                        <p>Wordpress, PHP</p>
                        <h6>Description:</h6>
                        <p>
                          This a website mockup made in wordpress. made for my
                          CMS/ERP class at Spokane Community College
                        </p>
                        <a
                          href="https://sedap.mitchellhamm.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            background: "#71cca9",
                            marginTop: "20px",
                            marginRight: "20px",
                            fontWeight: "500",
                          }}
                        >
                          Go To Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="container-fluid section-container mb-5"
            style={{ paddingTop: "135px" }}
            id="contact"
          >
            <div className="row d-flex flex-row py-5 hidden">
              <div className="col d-flex justify-content-center">
                <h3
                  className="display-6 fs-1 mb-3 hidden"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Contact
                </h3>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <p>Thanks for visiting! Feel free to reach out and connect.</p>
              </div>

              <form
                action="https://formsubmit.co/3df8a1b2bdb36c7435bdb3ecf11ca939"
                className="row g-3"
                method="POST"
              >
                <div className="col-12 mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission from portfolio!"
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Write your message here"
                    rows={3}
                    required
                  ></textarea>
                </div>
                <div className="d-grid d-md-flex justify-content-md-center">
                  <button className="btn btn-warning px-5" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <footer
          className="mt-auto container-fluid p-3 mx-auto row text-center text-light"
          style={{ backgroundColor: "black" }}
        >
          <p className="col-12">&copy; 2023 - Mitchell Hamm</p>
          <a target="_blank" href="https://icons8.com">
            Agile icon by Icons8
          </a>
          <a
            target="_blank"
            href="https://www.flaticon.com/free-icons/software-development"
            title="software development icons"
          >
            Software development icons created by Freepik - Flaticon
          </a>
        </footer>

        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </div>
    </>
  );
}

export default App;
