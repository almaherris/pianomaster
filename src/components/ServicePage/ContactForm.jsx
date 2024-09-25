import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { useForm } from "@formspree/react"
import "./ContactForm.css"

export const ContactForm = ({ introText }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isFormValid, setIsFormValid] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [state, handleFormSubmit] = useForm("xdknrqod")

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

  // Handle form submission
  useEffect(() => {
    if (state.succeeded) {
      setSubmitMessage(
        "Ditt meddelande har skickats! Vi hör av oss inom de närmsta dagarna."
      )
      // Clear form data
      setFormData({ name: "", email: "", phone: "", message: "" })
    } else if (Array.isArray(state.errors) && state.errors.length > 0) {
      setSubmitMessage(
        "Ditt meddelande kunde inte skickas. Vänligen försök igen eller maila oss på info@pianomaster.se."
      )
    }
  }, [state])

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <div className="contact-form-info">
          <h3>{introText}</h3>
          <h2>Kontakta oss</h2>
        </div>
        <form onSubmit={handleFormSubmit} method="post">
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
              minLength="10"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {submitMessage && <p className="success-message">{submitMessage}</p>}
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

ContactForm.propTypes = {
  introText: PropTypes.string.isRequired,
}
