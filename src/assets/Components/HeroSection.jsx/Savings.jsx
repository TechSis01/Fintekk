import savingsRange from "../Images/SavingsRange.png";
import savings from "../Images/savings.png";
import { motion } from "framer-motion";
function Savings() {
  return (
    <motion.div 
    className="saving-icon"
    initial={{x:"50vw"}}
    animate={{x:0}}
    transition={{type:"tween" , duration:"1"}}
    >
      <img src={savings} alt="savings-gateway" width="35"></img>
      <div>
        <p>Savings</p>
        <img src={savingsRange} alt="savings-range"></img>
      </div>
    </motion.div>
  );
}

export default Savings;
