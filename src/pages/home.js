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
        {/* <span className="spanImage">Experience Authentic Japanese And Asian Fusion Cuisine</span> */}
      </div>
            <p className='closedForReno'>
              <p>
              Mikado will be temporarily closing its doors for remodeling, starting from June 19th. This renovation is an exciting step forward in our journey towards 
              enhancing your dining experience.<br /><br />
              </p>
              <p>
              During this period, our team will be working tirelessly to transform our space into a vibrant and inviting Dim Sum and Chinese restaurant. We are thrilled 
              to announce that upon reopening in two months' time, you can expect a delectable menu featuring a wide variety of authentic dim sum delicacies, alongside a 
              selection of traditional Chinese dishes.<br /><br />
              </p>
              <p>
              In addition to the tantalizing flavors, we are committed to ensuring a healthier dining experience for our valued patrons. Our new menu will feature a range of 
              nutritious options crafted with the freshest ingredients, allowing you to indulge in delicious Chinese cuisine while maintaining a balanced lifestyle.<br /><br />
              </p>
              <p>
              We would like to express our sincere gratitude for your continued support throughout the years. Your loyalty and patronage have been invaluable to us, and we are 
              excited to serve you in our revitalized establishment.<br /><br />
              </p>
              <p>
              Please stay tuned for updates on our reopening date, which we will share through our website and <a className='innerFive' href="https://www.facebook.com/MikadoJapaneseSteakhouse/">facebook page</a>. If you have any questions or need 
              further assistance, our team is here to help. Feel free to reach out to us via <a className="innerFive" href="tel:9042608860">phone</a> or <a className="innerFive" href="mailto: mikado@mikado-jax.com">email</a>.<br /><br />
              </p>
              <p>
              Thank you once again for your unwavering support. We eagerly look forward to welcoming you back to Mikado soon.
              </p>
            </p>
      {/* <div className='swiperCss'>
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
      </div> */}
    </div>
  );
};

export default Home;
