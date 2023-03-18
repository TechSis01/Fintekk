import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowRight} from "react-icons/ai"
import { AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowDown} from 'react-icons/ai'
function TestimonialNumbers({count,setCount,data}) {

    // Function to count down
  const countDown = ()=>{
    if(count === data.length - 1){
      setCount(0)
    }
    else{
    setCount(prev=>prev + 1)
    }
  }

  // Function to count Up
  const countUp = ()=>{
    if(count === data.length - 1){
    setCount(count - 1)
    }
    else if(count === 0 ){
      setCount(2)
    }
    else{
    setCount(0)
    }
  }

  const counter1 = ()=>{
    setCount(0)
  }
  const counter2 = ()=>{
    setCount(1)
  }
  const counter3 = ()=>{
    setCount(2)
  }
  return (
    <section className="numbers-container">
        <AiOutlineArrowLeft onClick={countUp} className="arrow-left"></AiOutlineArrowLeft>
        <AiOutlineArrowUp onClick={countUp} className="arrow"/>
        <div className={`${count === 0 ? "testimonial-number" : "each-numbers"} `} onClick={counter1}>1</div>
        <div className={`${count === 1 ? "testimonial-number" : "each-numbers"} `}onClick={counter2} >2</div>
        <div className={`${count === 2 ? "testimonial-number" : "each-numbers"} `} onClick={counter3}>3</div>
        <AiOutlineArrowDown onClick={countDown} className=" arrow-down"/>
        <AiOutlineArrowRight onClick={countDown} className="arrow-right"></AiOutlineArrowRight>
    </section>
  )
}

export default TestimonialNumbers