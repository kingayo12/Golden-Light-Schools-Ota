import SipwerSlider from "../components/Slider/SipwerSlider";
import Aboutus from "../Layouts/Aboutus";
import AcademicPrograms from "../Layouts/AcademicPrograms";
import Announcement_news from "../Layouts/Announcement_news";
import Nav from "../Layouts/nav";
import Student_parent_resources from "../Layouts/Student_parent_resources";

const Home = () => {
  return (
    <div className='home_container'>
      <section className='home_nav'>
        <Nav />
      </section>
      <section className='home_hero_section'>
        <SipwerSlider />
      </section>
      <section className='home_About_section'>
        <Aboutus />
      </section>
      <section className='home_Anouncement_section'>
        <Announcement_news />
      </section>
      <section className='home_AcademicPrograms_section'>
        <AcademicPrograms />
      </section>
      <section className='home_Anouncement_section'>
        <Student_parent_resources />
      </section>
    </div>
  );
};

export default Home;
