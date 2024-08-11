import "../css/nav.css";
import Logo from "../assets/logo/logog.svg";
import { useState } from "react";

const Nav = () => {
  const [dropdownState, setDropdownState] = useState({
    aboutShow: false,
    academicShow: false,
    admissionShow: false,
  });

  // Generic toggle function for dropdowns
  const handleDropdownToggle = (dropdownName) => {
    setDropdownState((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const navLinks = [
    {
      name: "Home",
      href: "#",
      isActive: true,
    },
    {
      name: "About Us",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Mission & Vision", href: "#" },
        { name: "School History", href: "#" },
        { name: "Administration", href: "#" },
        { name: "School Policies", href: "#" },
      ],
      dropdownName: "aboutShow",
    },
    {
      name: "Academics",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Curriculum", href: "#" },
        { name: "Departments", href: "#" },
        { name: "Class Schedules", href: "#" },
        { name: "Academic Calendar", href: "#" },
      ],
      dropdownName: "academicShow",
    },
    {
      name: "Admissions",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Admission Process", href: "#" },
        { name: "Requirements", href: "#" },
        { name: "Application Forms", href: "#" },
        { name: "Tuition & Fees", href: "#" },
      ],
      dropdownName: "admissionShow",
    },
    {
      name: "Students",
      hasDropdown: true,
      dropdownName: "studentsShow",
      dropdownLinks: [
        { name: "Library", href: "#" },
        { name: "Counseling", href: "#" },
        { name: "Extracurricular Activities", href: "#" },
        { name: "Health Services", href: "#" },
      ],
    },
    {
      name: "Parents",
      hasDropdown: true,
      dropdownName: "parentsShow",
      dropdownLinks: [
        { name: "Parent Portal", href: "#" },
        { name: "PTA", href: "#" },
        { name: "Volunteer Opportunities", href: "#" },
        { name: "Newsletters", href: "#" },
      ],
    },
    {
      name: "Staff",
      hasDropdown: true,
      dropdownName: "staffShow",
      dropdownLinks: [
        { name: "Faculty Directory", href: "#" },
        { name: "Job Openings", href: "#" },
      ],
    },
    {
      name: "Contact Us",
      href: "#",
    },
    {
      name: "Media",
      hasDropdown: true,
      dropdownName: "mediaShow",
      dropdownLinks: [
        { name: "Photo Gallery", href: "#" },
        { name: "Videos", href: "#" },
        { name: "Virtual Tour", href: "#" },
      ],
    },
    {
      name: "Policies",
      hasDropdown: true,
      dropdownName: "policiesShow",
      dropdownLinks: [
        { name: "Handbooks", href: "#" },
        { name: "Forms", href: "#" },
        { name: "Policies", href: "#" },
      ],
    },

    {
      name: "News & Updates",
      hasDropdown: true,
      dropdownName: "newsUpdatesShow",
      dropdownLinks: [
        { name: "Blog", href: "#" },
        { name: "Press Releases", href: "#" },
      ],
    },
  ];

  return (
    <div className='nav'>
      <div className='nav_logo'>
        <div className='nav_logo_img'>
          <img src={Logo} alt='' />
        </div>
      </div>
      <div className='nav_contents'>
        <div className='nav_social_media'>
          <div className='school_name text-bold'>Golden Light International School Ota</div>
          <div className='social_media'>
            <a href='http://'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href='http://'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href='http://'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='http://'>
              <i className='fa-brands fa-tiktok'></i>
            </a>
          </div>
        </div>
        <div className='nav_links'>
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`nav_link ${link.isActive ? "active" : ""}`}
                onClick={link.hasDropdown ? () => handleDropdownToggle(link.dropdownName) : null}
              >
                <a href={link.href || "#"}>{link.name}</a>
                {link.hasDropdown && dropdownState[link.dropdownName] && (
                  <div className='dropdown'>
                    <ul>
                      {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <a href={dropdownLink.href}>{dropdownLink.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className='action'>
            <div className='notification'>
              <i className='fa fa-bell'></i>
            </div>
            <div className='mobile_menu'>
              <i className='fa fa-bars'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
