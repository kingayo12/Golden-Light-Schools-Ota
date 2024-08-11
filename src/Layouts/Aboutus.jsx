import Cardswiper from "../components/Slider/cardswiper";
import { Link } from "react-router-dom";
import "../css/aboutus.css";
const Aboutus = () => {
  return (
    <div className='about_container'>
      <div className='about_img'>
        <Cardswiper />
      </div>
      <div className='about_content'>
        <div className='text-content'>
          <h1>About Us</h1>
          <h4 className='text-spacing'>Inspiring Excellence, Embracing Diversity</h4>
          <p className='text-width'>
            At Golden Light International Schools Ota, we are dedicated to providing a nurturing and
            challenging educational environment that inspires students to achieve their fullest
            potential. Our mission is to cultivate lifelong learners who are equipped with the
            skills, knowledge, and values necessary to thrive in a diverse and dynamic world.
          </p>
          <div className='boxes_wrap'>
            <div className='wrap'>
              <div className='box'>
                <h4>Our Visions</h4>
                <p>
                  We envision a school where every student is empowered to become a confident,
                  compassionate, and responsible global citizen. Through innovative teaching
                  practices, a comprehensive curriculum, and a supportive community, we aim to
                  foster a love for learning and a commitment to excellence.
                </p>
              </div>
              <div className='shapset'>
                <Link to='/' className='link_style link_white'>
                  <i className='fa fa-arrow-right'></i> Read More
                </Link>
              </div>
              <div className='small_angle'></div>
            </div>

            <div className='wrap'>
              <div className='box'>
                <h4 className='red_bg'>Our Values</h4>
                <p className='values'>
                  <ul>
                    <li>
                      <h5>Excellence</h5>
                      Striving for the highest standards ...
                    </li>
                    <li>
                      <h5> Diversity</h5>
                      Celebrating and respecting the unique...
                    </li>
                    <li>
                      <h5> Integrity</h5>
                      Encouraging honesty, responsibility, and ethical behavior ...
                    </li>
                  </ul>
                </p>
              </div>
              <div className='shapset'>
                <Link to='/' className='link_style link_white red_bg'>
                  <i className='fa fa-arrow-right'></i> Read More
                </Link>
              </div>
              <div className='small_angle red_bg-thick'></div>
            </div>

            <div className='wrap'>
              <div className='box'>
                <h4>Our Programs</h4>
                <p>
                  Offering a rigorous and balanced curriculum that challenges students to think
                  critically and creatively. Our dedicated teachers and staff work tirelessly to
                  ensure that each student receives personalized attention and guidance, helping
                  them to achieve their academic and personal goals
                </p>
              </div>
              <div className='shapset'>
                <Link to='/' className='link_style link_white'>
                  <i className='fa fa-arrow-right'></i> Read More
                </Link>
              </div>
              <div className='small_angle'></div>
            </div>

            {/* <p>
              We are committed to creating a safe, inclusive, and stimulating learning environment
              where every student feels valued and supported.
            </p> */}
            <div className='join_us'>
              <p>
                Become part of a community that values excellence, embraces diversity, and is
                committed to the success of every student.
              </p>
              <div className='action_button'>
                <button>Join us now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
