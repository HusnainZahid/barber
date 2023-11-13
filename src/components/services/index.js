import './styles.css';
import pic1 from '../../images/pic-1.jpg';
import pic2 from '../../images/pic-2.jpg';
import pic3 from '../../images/pic-3.jpg';
import pic4 from '../../images/pic-4.jpg';

function Services() {
  return (
    <div className='service'>
            <div className="title-text">
                <p>SERVICES</p>
                <h1>We Provide Better</h1>
            </div>
            <div className="service-box">
                <div className="single-service">
                    <img src={pic1} alt=''/>
                    <div className="overlay"></div>
                    <div className="service-desc">
                        <h3>Hair Styling</h3>
                        <hr/>
                        <p> we offer a range of exceptional hair styling services to help you achieve the perfect look.</p>
                    </div>
                </div>
                <div className="single-service">
                    <img src={pic2} alt=''/>
                    <div className="overlay"></div>
                    <div className="service-desc">
                        <h3>Beard Trim</h3>
                        <hr/>
                        <p>we offer a comprehensive and expert beard trimming service to help you maintain a stylish beard.</p>
                    </div>
                </div>
                <div className="single-service">
                    <img src={pic3} alt=''/>
                    <div className="overlay"></div>
                    <div className="service-desc">
                        <h3>Hair Cut</h3>
                        <hr/>
                        <p>we take pride in providing a top-notch hair cutting experience that leaves our customers looking.</p>
                    </div>
                </div>
                <div className="single-service">
                    <img src={pic4} alt=''/>
                    <div className="overlay"></div>
                    <div className="service-desc">
                        <h3>Dry Shampoo</h3>
                        <hr/>
                        <p>we offer a convenient and effective solution to refresh your hair between washes: dry shampoo.</p>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Services;