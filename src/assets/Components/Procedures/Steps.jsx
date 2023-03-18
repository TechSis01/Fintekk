import React from "react";
import Numbers from "./Numbers";
import DownloadBtn from "./DownloadBtn";
function Steps() {
  return (
    <div className="steps-container">
      <div className="steps-header">
        <h1>Start the journey to reach your financial goals today.</h1>
      </div>
      <div className="numbers-steps-container">
        <Numbers />
        <div>
          <div className="steps-container-div">
            <h3>Download the mobile app</h3>
            <p>
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
          <div className="steps-container-div second-steps-container">
            <h3>Create a free account</h3>
            <p>
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
          <div className="steps-container-div">
            <h3>Add a payment method</h3>
            <p>
              Using your debit card, bank account, QR code, perform your first
              transaction.
            </p>
          </div>
          <div className="try-btn-container">
          <button className="try-btn">Try Finteek Now</button>
          </div>
          <DownloadBtn />
        </div>
      </div>
    </div>
  );
}

export default Steps;
