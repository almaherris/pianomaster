import "./MapSection.css"

export const MapSection = () => {
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.2106536236042!2d13.844738399999997!3d58.389848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465b02377cef7e07%3A0x8c7b204ba156d17c!2sPianoM%C3%A4ster!5e0!3m2!1ssv!2sse!4v1725967608402!5m2!1ssv!2sse"

  return (
    <div className="map-section">
      <div className="text-container">
        <p>ADRESS & KONTAKT</p>
        <p className="company-name">PianoMäster</p>
        <p>
          Butiken ligger i samma lokaler som Allmusikverkstan som du hittar i
          centrala Skövde vid Hertig Johans Torg. Bakom Mamma Mia, en trappa
          ner.{" "}
        </p>
        <div>
          <p>Storgatan 12A </p>
          <p>541 30 Skövde</p>
        </div>
        <div className="contact-information">
          <p>0707-999 138</p>

          <p>
            {" "}
            <a href="mailto:info@pianomaster.se">info@pianomaster.se</a>
          </p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"></iframe>
      </div>{" "}
    </div>
  )
}
