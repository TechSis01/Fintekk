import investmentRange from "../Images/InvestmentRange.png";
import investment from "../Images/investment.png";
import { motion } from "framer-motion";
function Investment() {
  return (
    <motion.div 
    className="investment-icon"
    initial={{x:"50vw"}}
    animate={{x:0}}
    transition={{type:"tween" , duration:"1"}}
    >
      <img src={investment} alt="investment-gateway" width="35"></img>
      <div>
        <p>Investments</p>
        <img src={investmentRange} alt="investment-range"></img>
      </div>
    </motion.div>
  );
}

export default Investment;
