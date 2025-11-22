import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import profile_img from '../../Assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className='about-left'>
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Full-Stack Developer with over a decade of professional expertise. Throughout my career, I have had the privilege of working with prestigious organizations, contributing to impactful projects and long-term growth.</p>
                <p>My passion for full-stack development is reflected in the dedication, precision, and enthusiasm I bring to every project I work on.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & Tailwind CSS</p><hr style={{width:"49%"}} /></div>
                <div className="about-skill"><p>React.js & JavaScript</p><hr style={{width:"45%"}} /></div>
                <div className="about-skill"><p>Next.js, Express.js & Node.js</p><hr style={{width:"39%"}} /></div>
                <div className="about-skill"><p>MongoDB & Postman</p><hr style={{width:"45%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>12+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
    </div>
</div>
  )
}

export default About
