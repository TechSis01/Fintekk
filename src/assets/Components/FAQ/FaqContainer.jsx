import FaqTexts from "./FaqContent";
import FaqImage from "./FaqImage";

function FaqContainer() {
  return (
    <section className="overall-faq-container">
        <FaqTexts />
        <FaqImage />
    </section>
  )
}

export default FaqContainer