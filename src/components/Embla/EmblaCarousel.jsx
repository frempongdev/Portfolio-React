/* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../../styles/embla.css'
import { myXP } from '../../assets/code/myXP'

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])




  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {myXP.map((xp, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <h4 className='xp-position'>{xp.position}</h4>
                <p className='xp-company'>{xp.name}</p>
                <p className='xp-date'>{xp.date}</p>
                <ul>
                  {
                    xp.roles.map((role,ind)=>(
                      <li key={ind} className='xp-role'>{role}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default EmblaCarousel
