import { NavLink } from "react-router-dom";
import ImgBanner from "../assets/images/Mikado Logo.png";

const PortalLayout = ({ children }) => {
  return (
    <main>
      <div className="headerWrapper">
        <header className="headerEdit">
          <img
            className="img-fluid d-block mx-auto hd-logo headerLogo"
            src={ImgBanner}
            alt="banner"
          />
        </header>
        <nav className="navbar navbar-expand-md nav-bg-color py-0">
          <div className="container-fluid px-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"><svg class="svg-inline--fa fa-bars fa-w-14 fa-2x svgLines" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                  <NavLink
                    className="flex-sm-fill text-center nav-link border-end border-3 nav-hover p-2 fw-bold"
                    to="/"
                    exact
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="flex-sm-fill text-center nav-link border-end border-3 nav-hover p-2 fw-bold"
                    to="/menu"
                    exact
                  >
                    MENU
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    className="flex-sm-fill text-center nav-link border-3 nav-hover p-2 fw-bold"
                    to="/contact-us"
                    exact
                  >
                    CONTACT US
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {children}

      <div>
        <div className="footerDiv">
            <div>
              <span className="innerFour">Mikado Japanese Steakhouse</span>
            </div>
            <div className="innerGridx3">
              <span className="innerFive"><a className="innerFive" href="https://www.google.com/maps/dir/?api=1&destination=10460%20Avenues%20S%20Walk%20Blvd,%20Jacksonville,%20FL%2033258" target="_blank">10460 Avenues S Walk Blvd, Jacksonville, FL 33258</a></span>
            </div>
            <div className="innerGridx3">
              <span className="innerFive"><a className="innerFive" href="tel:9042608860">(904)260-8860</a></span>
            </div>
            <div className="innerGridx3">
              <span className="innerFive"><a className="innerFive" href="mailto: mikado@mikado-jax.com">Mikado@mikado-jax.com</a></span>
            </div>
        </div>
        <div>

        </div>
      </div>
    </main>
    
  );
};

export default PortalLayout;
