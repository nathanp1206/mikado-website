import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

const Home = () => {

  SwiperCore.use([Autoplay])

  return (
    <div className="container-fluid px-0 flex-sf">
      <div className="outerDiv">
        <img src="./images/IMG_1831.JPG" className="imageOne"></img>
        <span className="spanImage">Experience Authentic Japanese And Asian Fusion Cuisine</span>
      </div>
      <div className="mapAndInviteContainer">
        <div className="gridOne">
          <div className="innerGrid">
            <span className="innerOne">Come and see us!</span>
            <div className="innerGridx2">
              <span className="innerTwo">Address:</span>
              <span className="innerThree"><a className="innerThree" href="https://www.google.com/maps/dir/?api=1&destination=10460%20Avenues%20Walk%20Blvd,%20Jacksonville,%20FL%2033258" target="_blank">10460 Avenues Walk Blvd, Jacksonville, FL 33258</a></span>
            </div>
            <div className="innerGridx2">
              <span className="innerTwo">Phone:</span>
              <span className="innerThree"><a className="innerThree" href="tel:9042608860">(904)260-8860</a></span>
            </div>
            <div className="innerGridx2">
              <span className="innerTwo">Email:</span>
              <span className="innerThree"><a className="innerThree" href="mailto: mikado@mikado-jax.com">Mikado@mikado-jax.com</a></span>
            </div>
          </div>
        </div>
        <div className="gridThree">
          <span style={{color: "white", fontWeight: "bold"}}>
            Hours:
          </span>
          <div className='hoursClass'>
            <div>Sunday:	11:30AM - 9PM</div>
            <div>Monday:	3PM - 9PM</div>
            <div>Tuesday:	Closed</div>
            <div>Wednesday:	3PM - 9PM</div>
            <div>Thursday:	3PM - 9PM</div>
            <div>Friday:	11:30AM - 9PM</div>
            <div>Saturday:	11:30AM - 9PM</div>
          </div>
          <div className='happyHour'>
            Happy Hour from 3PM to 6PM on Weekdays!
            <br />Beer and Wine(House) $2 off!
          </div>
        </div>
        <div className="gridTwo">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.093123924021!2d-81.55724648463479!3d30.17733371923699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5cb7724daac5d%3A0x9638c8e1cee844f8!2sMikado!5e0!3m2!1sen!2sus!4v1674419651779!5m2!1sen!2sus" className="googleMaps" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
      </div>
      <div className='swiperCss'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          effect="fade"
          pagination={{ clickable: true }}    
        >
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8546.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_2001.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_1926.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_1835.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_5358.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8043.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_1168.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_2008.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8520.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8491.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8487.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8555.JPG"></img></SwiperSlide>
          <SwiperSlide><img className='swiperSlides' src="./images/IMG_8543.JPG"></img></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
