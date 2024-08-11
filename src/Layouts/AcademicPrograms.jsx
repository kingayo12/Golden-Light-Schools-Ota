import "../css/AcademicPrograms.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AcademicPrograms = () => {
  const programs = [
    {
      title: "Science and Technology",
      description:
        "Explore the world of science and technology with our comprehensive program that includes hands-on experiments and cutting-edge research.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Arts and Humanities",
      description:
        "Delve into the arts and humanities with courses that cover literature, history, music, and visual arts.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Business and Economics",
      description:
        "Learn the principles of business and economics through practical applications and real-world case studies.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Health and Physical Education",
      description:
        "Promote wellness and physical fitness with our health and physical education program, which includes both theory and practice.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mathematics",
      description:
        "Enhance your mathematical skills with our rigorous program that covers a wide range of mathematical concepts and techniques.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Social Sciences",
      description:
        "Study the complexities of human society with courses in psychology, sociology, anthropology, and more.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className='academic-programs'>
      <h2>Our Academic Programs</h2>
      <div className='program_swper_container'>
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className='sliderw'
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className='program-card'>
                <div className='program_img_container'>
                  <img src={program.image} alt={program.title} className='program-image' />
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className='shape'>
                  <i className='fa-sharp fa-light fa-graduation-cap pulse'></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AcademicPrograms;
