import { techStack } from '../assets/code/techStack'
import { socials } from '../assets/code/socials'
import '../styles/Right.css'
import { useState } from 'react'

const Right = () => {
  const [activeSocial,setActiveSocial] = useState(null);

  return (
    <div className="right-wrapper">
      <div className="top-image-box">
        <div className="image-circle">
          <img src="https://avatars.githubusercontent.com/u/117144028?v=4" alt="me-pic" className="me-pic" />
        </div>
        <div className="me-desc">
          <div className="title-box">
            <span className="intro">Hi, I am</span>
            <h1 className="my-name">FREMPONG</h1>
          </div>
          <h2 className="my-title">A FULL-STACK SOFTWARE ENGINEER</h2>
          <p className="intro-p">With passion for learning and problem-solving.
            Brings enthusiasm and a strong work ethic to every project.
            Continually eager to grow skills and contribute to innovative software development.</p>
        </div>
      </div>
      <div className="social-wrapper">
      <h4 className="connect">Conect with</h4>
      <div className="socials">
        <ul className="social-box">
          {activeSocial === null ? (
            socials.map((social,indx) => (
              <li key={indx+1} onClick={()=>setActiveSocial(indx)}>
                <img src={social.icon} alt="" className="soc-icon" />
              </li>
            ))

          ):
          (
              <li className="soc1-box">
                <img src={socials[activeSocial].icon} alt="" className="soc1-icon" />
                <div className="soc1-desc">
                  <a className="soc-link" href={socials[activeSocial].link} target="_blank" rel="noreferrer">{socials[activeSocial].username}</a>
                  <span className="soc1-name"> on {socials[activeSocial].name}</span>
                </div>
                <h2 className="soc-x" onClick={()=>setActiveSocial(null)}>x</h2>
              </li>   
          )
          }
        </ul>
      </div>
      </div>
      <div className='down-image-box'>
          <div className="tech-scroll">
            <ul className="tech-list">
              {
                techStack.map((stack,indx)=> (
                  <li className="tech-item" key={indx+1}>
                    <img src={stack.img} alt={`${stack.name}-pic`} className="tech-pic" />
                    <p className="tech">{stack.name}</p>
                  </li>
                ))    
              }
            </ul>
            <ul className="tech-list">
              {
                techStack.map((stack,indx)=> (
                  <li className="tech-item" key={indx+1}>
                    <img src={stack.img} alt={`${stack.name}-pic`} className="tech-pic" />
                    <p className="tech">{stack.name}</p>
                  </li>
                ))    
              }
            </ul>
          </div>
        </div>
        <div className="contact-box">
          <div className="con-left">
            <h3 className="con-head">Quick Connect</h3>
            <div className="box-box">
              <form action="submit" className="con-form">
                <input type="text" placeholder="Email" className="con-email"/>
                <textarea type="text" rows="4" placeholder="Please enter a message"/>
                <input type="submit" value="SEND" className="con-send"/>
              </form>
              <div className="resume-box">
              <a href="tel:216-294-9663" className="number">+233 548 356 263</a>
                <p className="address">samankwaa.frempong@gmail.com</p>
                <button type="button" onClick={()=>location.href="https://drive.google.com/file/d/1qvSEffCBY5eYUBen1Dc2YQUSMdMP6IIe/view?usp=sharing"} target="_blank">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="con-right">
          </div>
        </div>
    </div>
  )
}

export default Right