import payments from '../Images/payments.png'
import paymentsRange from '../Images/paymentRange.png'
import { motion } from 'framer-motion'
function Payments() {
  return (
    <motion.div 
    className="payment-icon"
    initial={{x:"50vw"}}
    animate={{x:0}}
    transition={{type:"tween" , duration:"1"}}
    >
        <img src={payments} alt="payment-gateway" width="35"></img>
        <div>
            <p>Payments</p>
            <img src={paymentsRange} alt="payment-range"></img>
        </div>
    </motion.div>
  )
}

export default Payments