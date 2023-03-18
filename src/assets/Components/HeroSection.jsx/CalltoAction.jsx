import SignUpButton from "../SignUpButton";
import AndriodBtn from "./AndriodBtn";
import AppleBtn from "./AppleBtn";
function CalltoAction() {
  return (
    <div className="cta-container">
      <h1>Pay, Invest, Save your Cash with a single bank</h1>
      <p id="cta-pitch">
        Fintekk is the bank that does it all. Manage everything directly and
        easy with fintekk.
      </p>
      <div className="sign-up-btn-container">
        <button className="sign-up-btn-2">Sign up for free</button>
      </div>
      {/* <SignUpButton /> */}
      <div className="device-download-buttons">
        <AndriodBtn />
        <AppleBtn />
      </div>
    </div>
  );
}

export default CalltoAction;
