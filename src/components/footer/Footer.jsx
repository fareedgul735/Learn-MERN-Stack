import "./Footer.css";

const Footer = ({ isDark = false }) => {
  return (
    <footer className={isDark ? "dark-footer" : "footer"}>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Register Now. All rights reserved.</p>
        <div className={isDark ? "dark-style" : "social-links"}>
          <a target="blank" href="https://www.facebook.com/farii.khan.7315">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a target="blank" href="https://www.twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/fareed-gul-946329333/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BABXtTv4AR%2BWDna0GH3C48w%3D%3DF"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
