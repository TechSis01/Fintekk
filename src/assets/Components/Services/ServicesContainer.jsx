import EasyPayment from "./EasyPayment"
import FixedSavings from "./FixedSave"
import ServicesHeader from "./ServicesHeader"
import Invest from "./Invest"
function ServicesContainer() {
  return (
    <section className="full-services-container">
        <ServicesHeader />
        <div className="services-container">
            <EasyPayment />
            <Invest />
            <FixedSavings />
        </div>
    </section>
  )
}

export default ServicesContainer