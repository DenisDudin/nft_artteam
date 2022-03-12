import aboutMovie from '../video/about.mp4'
import avatar from '../img/avatar1.png'



function About() {
  return (<section className="about">
    <div className="about__container">
      {/* <div className="about__movie">
        <video controls="controls" width="400" height="700">
          <source src={aboutMovie} type="video/mp4" />
        </video>
      </div> */}
      <img src={avatar} alt="" />
      <div className="about__text">
        <h1 className="about__title">SPECIALISTS IN THE PRODUCTION OF NFT COLLECTIONS</h1>
        <a href="">By on Opensea</a>
      </div>
      <div className="border"></div>
    </div>
  </section>)
}

export {About}