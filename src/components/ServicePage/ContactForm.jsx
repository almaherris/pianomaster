import { useState, useEffect } from "react"
import "./ContactForm.css"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    // Check if required fields are filled
    const { name, email, message } = formData
    if (name && email && message) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <div className="contact-form-info">
          <h3>Frågor?</h3>
          <h2>Kontakta oss</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://httpbin.org/post"
          method="post">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Namn</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-post</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefonnummer</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Meddelande</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <p className="disclaimer-text">
            <i>
              Ditt meddelande skickas till vår e-postadress, och din
              kontaktinformation används endast som avsändare på mailet så att
              vi kan svara på ditt meddelande. Om du inte godkänner, var vänlig
              ring eller maila istället.
            </i>
          </p>
          <label>
            <input className="form-checkbox" type="checkbox" required /> Jag
            godkänner att min information används för att skicka mitt
            meddelande.
          </label>{" "}
          <button
            type="submit"
            className={`submit-button ${isFormValid ? "active" : "inactive"}`}
            disabled={!isFormValid}>
            Skicka
          </button>
        </form>
      </div>
    </div>
  )
}
