function Footer() {
  return (
    <footer>
        <section className="footer-links-container">
        <div className="fintekk-footer">
          <h2 class="bold">Fintekk</h2>
          <p id="fintekk-about">
            Fintekk is the bank that does it all. Manage everything directly and
            easy with fintekk.
          </p>
          </div>
        <div className="footer-links">
          <div>
            <p class="bold">Company</p>
            <p>Careers</p>
            <p>About Us</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
          <div>
            <p class="bold">Services</p>
            <p>Payments</p>
            <p>Investments</p>
            <p>Savings Plan</p>
          </div>
          <div>
            <p class="bold">Resources</p>
            <p>Media</p>
            <p>FAQs</p>
            <p>Help Centre</p>
            <p>Security</p>
          </div>
          <div>
            <p class="bold">Contact Us</p>
            <p>
              <a href="https://twitter.com/QueenAkpan_" className="twitter-link">www.fintekk.com</a>
            </p>
          </div>
        </div>
      </section>

      <div className="copyright-container">
        <p>Copyright 2022 fintekk. All rights reserved</p>
        <p>Terms and Conditions, Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
