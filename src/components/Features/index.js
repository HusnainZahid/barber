import './styles.css';

function Features() {
  return (
    <div className='feature'>
            <div className="title-text">
                <p>FEATURES</p>
                <h1>Why Choose Us</h1>
            </div>
            <div className="feature-box">
            <div className="features-img">
                    <img src={'https://img.freepik.com/premium-photo/vintage-barbershop-brutal-guy-scissors-straight-razor-bearded-client-visiting-barber-shop-barber-scissors-straight-razor-barber-shop-suit-vintage-barber-shop-shaving_293990-2660.jpg?size=626&ext=jpg&ga=GA1.2.1991698770.1686377922&semt=ais'} alt=''/>
                </div>
                <div className="features">
                    <h1>Experienced Staff</h1>
                    <div className="feature-desc">
                        <div className="feature-icon">
                            <i className="fa fa-shield"></i>
                        </div>
                        <div className="feature-text">
                            <p>Where Experience Meets Style. Our team of seasoned barbers brings years of expertise to every cut, ensuring you leave with a haircut that exceeds your expectations. Trust in our experienced staff to deliver precision, creativity, and unparalleled attention to detail, making each visit a cut above the rest.</p>
                        </div>
                    </div>
                    <h1>Affordable Cost</h1>
                    <div className="feature-desc">
                        <div className="feature-icon">
                            <i className="fa fa-dollar"></i>
                        </div>
                        <div className="feature-text">
                            <p>At our barber shop, we offer affordable prices for our services to ensure that everyone can enjoy a quality grooming experience.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Features;