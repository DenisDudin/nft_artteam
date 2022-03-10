import aboutMovie from '../video/about.mp4'



function About() {
  return (<section className="about">
    <div className="about__container">
      {/* <div className="about__movie">
        <video controls="controls" width="400" height="700">
          <source src={aboutMovie} type="video/mp4" />
        </video>
      </div> */}
      <div className="about__text">
        {/* <h1 className="about__title">Специалисты по производству NFT коллекций</h1> */}
      </div>
      <div className="border"></div>
    </div>
  </section>)
}

export {About}