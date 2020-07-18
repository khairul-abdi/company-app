import React, {useState} from "react"
import hero from '../img/bg.svg'
import { Link, useHistory } from 'react-router-dom'

const Main = () => {

  const [joined, setJoined] = useState('')
  const history = useHistory()

  const join = (e) => {
    e.preventDefault()
    if (joined !== '') {
      let today = new Date()
      let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate()
      history.push(`/thanks/${joined}`, date)
    }
  }

  return (
    <React.Fragment>
      <header>
        <img src={hero} className="hero-bg"/>
          <div>
            <h1>URUSAN LEGAL JADI LEBIH <br/>GAMPANG DENGAN HAKITA</h1>
            <p>menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya.</p>
            <Link to="/contact">Get in touch</Link>
          </div>
      </header>

      <main>
        <section className='services'>
          <h2>Law for All &amp;<br/><span className="all"> All for Law</span></h2>

          <div className="service-container">
            <div className="services-card service-one"></div>
            <div className="service-description">
              <h3>Kami Memenuhi Kebutuhan Orang</h3>
              <div>Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.</div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-two"></div>
            <div className="service-description">
              <h3>Kami Memberikan Perlindungan</h3>
              <div>Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-three"></div>
            <div className="service-description">
              <h3>Kami Dapat Dipercaya</h3>
              <div>HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</div>
            </div>
          </div>
        </section>

        <section>
          <h2>Join our newsletter to get the latest trends.</h2>
          <form className="newsletter" onSubmit={join}>
            <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
            <input type="submit" value="Join Now!"/>
          </form>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Main