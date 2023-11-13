import './styles.css';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';

function Testimonials() {
  return (
    <div className='testimonial'>
        <div className="title-text">
            <p>TESTIMONIALS</p>
            <h1>What Client Says</h1>
        </div>
        <div className="testimonial-row">
            <div className="testimonial-col">
                <div className="user">
                    <img src={img1} alt=''/>
                    <div className="user-info">
                        <h4>KEN NORMAN <i className="fa fa-twitter"></i></h4>
                        <small>@kennorman</small>
                    </div>
                </div>
                {/* <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula. Donec aget ultricies sapi. Donec aget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula. Donec eget ultricies sapi.</p> */}
                <p>I absolutely love this barber shop! The barbers are highly skilled and give amazing haircuts. The atmosphere is friendly and welcoming, and the prices are very reasonable. Highly recommend!</p>
            </div>
            <div className="testimonial-col">
                <div className="user">
                    <img src={img2} alt=''/>
                    <div className="user-info">
                        <h4>Liara Karian <i className="fa fa-twitter"></i></h4>
                        <small>@liarakarian</small>
                    </div>
                </div>
                {/* <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula. Donec aget ultricies sapi. Donec aget ultricies sapi.</p> */}
                <p>I've been going to this barber shop for years, and they never disappoint. The barbers are skilled, experienced, and always up to date with the latest trends.</p>
            </div>
            <div className="testimonial-col">
                <div className="user">
                    <img src={img3} alt=''/>
                    <div className="user-info">
                        <h4>Ricky Danial <i className="fa fa-twitter"></i></h4>
                        <small>@rickydanial</small>
                    </div>
                </div>
                {/* <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula. Donec aget ultricies sapi. Donec aget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula. Donec eget ultricies sapi.</p> */}
                <p>I had a fantastic experience at this barber shop. The staff is friendly, and the service is top-notch. The attention to detail was impressive. I highly recommend this place!</p>
            </div>
        </div>
    </div>
  );
}

export default Testimonials;