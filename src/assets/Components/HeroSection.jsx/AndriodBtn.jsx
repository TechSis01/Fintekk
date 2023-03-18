import React from "react";
import playStore from "../Images/playStore.png";
function AndriodBtn() {
  return (
    <div className="playstore-logo">
      <img src={playStore} alt="playStoreLogo" width="20"></img>
      <p className="logo-text">Get on Andriod</p>
    </div>
  );
}

export default AndriodBtn;
