import easyPay from "../Images/easy-pay.png";
import { AiOutlineArrowRight } from "react-icons/ai"
function EasyPayment() {
  return (
    <div className="offers">
      <h2>Easy Payment</h2>
      <p className="offers-pitch">Stress-free payment for all transactions that you do at any time.</p>
      <p>Read More <AiOutlineArrowRight /></p>
      <img src={easyPay} alt="easy-payment"></img>
    </div>
  );
}

export default EasyPayment;
