import founder1 from '../img/founder1.jpg'
import founder2 from '../img/founder2.jpg'

function Founders() {
  return (<section className="founders">
    <div className="founders__container">
      <div className="founder">
        <img src={founder1} alt="" className="founder__img" data-proportion-h="1.5" width="300"/>
        <div className="founder__info overlap-left">
          <h1 className="founder__name">This is Vladislav Osipov
            <br></br>The Founder<br></br>
            <span>based in Hamburg</span>
          </h1>
          <p className="founder__description">Head of Production and strategic solutions within content and social media. Gives a clear understanding of NFT, conducts training and further support of new personnel in the work.</p>
          <div className="founder__links">
            <a href="https://instagram.com/v.o.v_v.o.v?utm_medium=copy_link" className="founder__link" target="_blank">Learn more</a>
          </div>
        </div>
      </div>

      <div className="founder">
        <div className="founder__info overlap-right">
          <h3 className="founder__name">This is Danila Morozov
            <br></br>The CEO<br></br>
            <span>based in Moscow</span>
          </h3>
          <p className="founder__description">Sales Manager. He has extensive experience in working with artists, bloggers, major brands and Tik-Tok houses.</p>
          <div className="founder__links">
            <a href="https://instagram.com/mor_danya?utm_medium=copy_link" className="founder__link" target="_blank">Learn more</a>
          </div>
        </div>
        <img src={founder2} alt="" className="founder__img" />
      </div>
    </div>
  </section>)
}

export {Founders}