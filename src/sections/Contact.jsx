function Contact() {
  return (<section className="contact">
    <div className="contact_title title container">
          <h2 className="contact__title title">⁃ Contact ⁃</h2>
        </div>
        <form className="contact_form" action="send.php" method="POST">
          <div className="contact_row">
            <div className="contact_col50">
              <input
                  type="text"
                  name="first-name"
                  placeholder="Имя"
  
                />
            </div>
            <div className="contact_col50">
              <input
                type="text"
                name="last-name"
                placeholder="Фамилия"
 
              />
            </div>
          </div>
          <div className="contact_row">
            <div className="contact_col50">
              <input
                type="email"
                name="email"
                placeholder="Адрес почты"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"

                required
              />
            </div>
            <div className="contact_col50">
              <input
                className="tel"
                type="text"
                name="phone"
                placeholder="Телефон"
                pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}\s\d{4}"

              />
            </div>
          </div>
          <div className="contact_row">
            <div className="contact_col100">
              <textarea
                placeholder="Сообщение"
                name="msg"
                minLength="8"
                maxLength="230"

                required
              ></textarea>
            </div>
          </div>
          {/* <div className="contact_row">
            <div className="contact_col100">
              <PriceSlider />
            </div>
          </div> */}
          <div className="contact_send">
            <button type="submit">Send</button>
          </div>
        </form>
    <div className="copyright">
      <span>© {new Date().getFullYear()}, ArtTeam. All Rights Reserved</span>
    </div>
  </section>)
}

export {Contact}