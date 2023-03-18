import cnbc from './Images/cnbc.png'
import forbes from './Images/forbes.png'
import quartz from './Images/quartz.png'
import bloomberg from './Images/bloomberg.png'
import stripe from './Images/stripe.png'
import { motion } from 'framer-motion'
function TechCo() {
  return (
    <motion.div 
    className='TechCos'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
        <div>
            <img src={bloomberg} alt="bloomberg logo"></img>
        </div>
        <div>
            <img src={cnbc} alt="bloomberg logo"></img>
        </div>
        <div>
            <img src={forbes} alt="bloomberg logo"></img>
        </div>
        <div>
            <img src={stripe} alt="bloomberg logo"></img>
        </div>
        <div>
            <img src={quartz} alt="bloomberg logo"></img>
        </div>
    </motion.div>
  )
}

export default TechCo