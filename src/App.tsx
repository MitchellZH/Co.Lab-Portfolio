import sticker from "./assets/design-software.png";
import logo from "./assets/logo.png";

function App() {

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <header
          className="navbar fixed-top mx-auto p-3 header-shadow"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <a
              className="logo"
              href=""
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
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
                className="nav-link py-1 px-0 active fw-bold"
                aria-current="page"
                href="#"
              >
                About Me
              </a>
              <a className="nav-link py-1 px-0 fw-bold" href="#">
                Skills
              </a>
              <a className="nav-link py-1 px-0 fw-bold" href="#">
                Projects
              </a>
              <a className="nav-link py-1 px-0 fw-bold" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main style={{ marginTop: "100px" }}>
          <section className="container-fluid section-container m-5 p-5 row mx-auto">
            <div className="col-12 col-lg-6 my-auto">
              <p className="display-1">Welcome to my Portfolio.</p>
              <p className="display-6">I'm Mitchell Hamm.</p>
              <p className="display-6" style={{ color: "#72cdaa" }}>
                Full Stack developer.
              </p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-dark border-white">
                  About Me
                </a>
              </p>
            </div>
            <div className="col-6 d-none d-lg-block">
              <img
                style={{ maxWidth: "100%" }}
                src={sticker}
                alt="software design sticker"
              />
            </div>
          </section>
        </main>
        <footer
          className="mt-auto container-fluid p-3 mx-auto row text-center text-light"
          style={{ backgroundColor: "black" }}
        >
          <p className="col-12">&copy; 2023 - Mitchell Hamm</p>
          <a
            href="https://www.flaticon.com/free-stickers/computer"
            title="computer stickers"
            className="col"
          >
            Computer stickers created by Stickers - Flaticon
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

export default App
