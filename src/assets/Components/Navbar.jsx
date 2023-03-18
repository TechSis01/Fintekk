import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import {useState} from "react"
function Navbar() {
    const [navToggle, setNavToggle] = useState(false)
    
    const toggleNav = ()=>{
        setNavToggle(prev => !prev)
    }

  return (
    <header>
      <nav>
        <div className="brand-name">
          <h3>Fintekk</h3>
        </div>
        <div className={`nav-list-buttons-container ${navToggle ? "nav-active" : ""}`}>
          <div className="nav-list-container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="registry-buttons">
            <LoginButton />
            <SignUpButton />
          </div>
        </div>

        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
