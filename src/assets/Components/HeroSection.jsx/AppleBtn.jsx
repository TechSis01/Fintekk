import appleLogo from "../Images/appleLogo.png";

function AppleBtn() {
  return (
    <div className="apple-logo">
      <img src={appleLogo} alt="appleLogo" width="20"></img>
      <p className="logo-text">Get on iPhone</p>
    </div>
  );
}

export default AppleBtn;
