import './styles.css';

function Footer() {
  return (
    <div className='footer'>
        <img src="images/footer-img.png" className="footer-img" alt=''/>
        <div className="title-text">
            <p>CONTACT</p>
            <h1>Visit Shop Today</h1>
        </div>
        <div className="footer-row">
            <div className="footer-left">
                <h1>Opening Hours</h1>
                <p><i className="fa fa-clock-o"></i>Monday to Friday - 9am to 9pm</p>
                <p><i className="fa fa-clock-o"></i>Saturday and Sunday - 8am to 11pm</p>
            </div>
            <div className="footer-right">
                <h1>Get In Touch</h1>
                <p><i className="fa fa-map-marker"></i> #30 cvb Colony, New York</p>
                <p><i className="fa fa-paper-plane"></i> hairsalon@hotmail.com</p>
                <p><i className="fa fa-phone"></i> +01 925353267</p>
            </div>
        </div>

        <div className="social-links">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube-play"></i>
        </div>
    </div>
  );
}

export default Footer;