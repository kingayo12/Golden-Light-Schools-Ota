import { Link } from "react-router-dom";
import "../css/Announcement_news.css";
import { useState, useEffect } from "react";
import RippleButton from "../components/buttons/RippleButton";
const Announcement_news = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Mock data for announcements and news
    const data = [
      {
        title: "New School Year Begins",
        summary:
          "The new school year is starting with excitement and anticipation. Students and staff are ready to embrace new challenges and opportunities.",
        date: "13-August-2024",
        time: "11:40 AM",
        link: "#",
      },
      {
        title: "Science Fair Winners Announced",
        summary:
          "Congratulations to the winners of the annual science fair! Their innovative projects impressed the judges and showcased remarkable talent.",
        date: "10-August-2024",
        time: "09:30 AM",
        link: "#",
      },
      {
        title: "Upcoming Parent-Teacher Conferences",
        summary:
          "Parent-teacher conferences are scheduled for next week. This is a great opportunity for parents to discuss their child's progress with teachers.",
        date: "15-August-2024",
        time: "02:00 PM",
        link: "#",
      },
      {
        title: "New After-School Programs",
        summary:
          "We are introducing new after-school programs this semester, including robotics, drama club, and foreign language classes. Enroll now!",
        link: "#",
        date: "10-August-2024",
        time: "09:30 AM",
      },
    ];
    setNews(data);
  }, []);

  return (
    <div>
      <div className='announcement_cont'>
        <h1>Announcement & News</h1>
        <div className='announcement_boxes'>
          {news.length > 0 ? (
            news.map((article, index) => (
              <div className='announcement_box' key={index}>
                <div className='announement_image'>
                  <i className='fa-solid fa-megaphone'></i>
                </div>
                <div className='announcement_content'>
                  <div className='date_time_cont'>
                    <div className='date'>{article.date}</div>
                    <div className='time'>{article.time}</div>
                  </div>
                  <article>
                    <h4>{article.title}</h4>
                    <p>{article.summary}</p>
                  </article>
                  <Link to={article.link} rel='noopener noreferrer' className='anLink'>
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to='#' className='anlinks'>
          <RippleButton>Explore</RippleButton>
        </Link>
      </div>
    </div>
  );
};

export default Announcement_news;
