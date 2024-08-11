import { Swiper, SwiperSlide } from "swiper/react";
import Hero1 from "../../assets/imgs/hero1.gif";
import Hero2 from "../../assets/imgs/hero2.gif";
import Hero3 from "../../assets/imgs/hero3.gif";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SipwerSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='img_container'>
            <img src={Hero1} alt='' />
          </div>
          <article>
            <h1 className='title'>Celebrating Our Cultural Heritage</h1>
            <h4 className='subtitle'>
              Honoring the Traditions, Stories, and People That Shape Our Community
            </h4>
            <p>
              Our school proudly embraces the rich tapestry of cultures that contribute to our
              unique identity. In this section, we celebrate the traditions, stories, and
              individuals that make up our vibrant community. By recognizing and honoring our
              cultural heritage, we foster an inclusive environment where every student feels valued
              and respected.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img_container'>
            <img src={Hero2} alt='Academic Excellence' />
          </div>
          <article>
            <h1 className='title'>Striving for Academic Excellence</h1>
            <h4 className='subtitle'>Fostering a Passion for Learning and Achievement</h4>
            <p>
              Our school is dedicated to providing a high-quality education that challenges and
              inspires students. We cultivate a learning environment where academic excellence is
              pursued with passion, preparing students for success in their future endeavors.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img_container'>
            <img src={Hero3} alt='Skill Development' />
          </div>
          <article>
            <h1 className='title'>Empowering Skills for the Future</h1>
            <h4 className='subtitle'>Equipping Students with the Tools They Need to Succeed</h4>
            <p>
              Our curriculum is designed to develop essential skills that students need for the
              future. From critical thinking and problem-solving to creativity and collaboration, we
              ensure our students are well-equipped to thrive in an ever-changing world.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img_container'>
            <img src={Hero1} alt='Professional Development' />
          </div>
          <article>
            <h1 className='title'>Professional Growth and Excellence</h1>
            <h4 className='subtitle'>Preparing Students for Career Success</h4>
            <p>
              We believe in the importance of professional development for both students and staff.
              Our programs and initiatives aim to foster a culture of continuous learning and
              improvement, ensuring everyone is prepared for career success.
            </p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <div className='img_container'>
            <img src={Hero2} alt='Community Engagement' />
          </div>
          <article>
            <h1 className='title'>Building Strong Community Connections</h1>
            <h4 className='subtitle'>Strengthening Bonds Through Engagement and Collaboration</h4>
            <p>
              Our school values the strong relationships we build within our community. Through
              active engagement and collaboration, we create a supportive network that enhances the
              educational experience and fosters a sense of belonging for all.
            </p>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SipwerSlider;
