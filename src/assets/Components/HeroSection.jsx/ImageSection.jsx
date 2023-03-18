import lady from "../Images/picture.png";
import Payments from "./Payments";
import Investment from "./Investment";
import Savings from "./Savings";
import { motion } from "framer-motion";
function ImageSection() {
  return (
    <>
      <div className="lady-container">
        <motion.img 
        src={lady} 
        alt="fintekk lady"
        initial={{opacity:0}}
        animate={{opacity:1}}
        trasition={{type:"inertia", delay: 0.5, duration: 1 }}
        ></motion.img>
      </div>
      <Payments />
      <Investment />
      <Savings />
    </>
  );
}

export default ImageSection;
