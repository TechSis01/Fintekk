import investOffer from '../Images/invest-offer.png'
import { AiOutlineArrowRight} from 'react-icons/ai'
function Invest() {
  return (
    <div className='investment-container' >
      <h2>Investments</h2>
      <p className="offers-pitch">Grow your money by investing in pre-vetted investment opportunities.</p>
      <p>Read More <AiOutlineArrowRight /></p>
      <img src={investOffer} alt="investment Offers"></img>
    </div>
  )
}

export default Invest