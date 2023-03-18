import savingsglass from '../Images/savings-glass.png'
import { AiOutlineArrowRight} from 'react-icons/ai'
function FixedSavings() {
  return (
    <div className='offers'>
      <h2>Fixed Savings</h2>
      <p className="offers-pitch">Build a dedicated savings faster on your terms automatically or manually.</p>
      <p>Read More <AiOutlineArrowRight /></p>
      <img src={savingsglass} alt="investment Offers"></img>
    </div>
  )
}

export default FixedSavings