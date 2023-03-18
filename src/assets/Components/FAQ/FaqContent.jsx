import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function FaqTexts() {
  return (
    <div className="faq-content-container">
      <h1>FAQs</h1>
      <Accordion>
        <Accordion.Item eventKey="0" className="item">
          <Accordion.Header>How secure is your platform?</Accordion.Header>
          <Accordion.Body className="faq-content-p">
            Security is our top priority. We use the latest encryption and
            authentication technologies to ensure that your data is safe and
            secure. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="item">
          <Accordion.Header>
            What types of financial services do you offer?
          </Accordion.Header>
          <Accordion.Body className="faq-content-p">
            We offer a wide range of financial services, including online
            banking, investing, and budgeting tools. Our platform allows you to
            covered.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="item">
          <Accordion.Header>
            How long does it take to get started?
          </Accordion.Header>
          <Accordion.Body className="faq-content-p">
            Getting started is quick and easy. Simply sign up for an account on
            our website, and you can start using our platform immediately. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
