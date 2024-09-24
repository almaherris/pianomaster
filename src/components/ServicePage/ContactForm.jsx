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
  const [submitMessage, setSubmitMessage] = useState("")

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

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission
    //Handle submit logic here, to update
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("Form submitted successfully:", result)
      setSubmitMessage(
        "Ditt meddelande har skickats! Vi hör av oss via mail inom de närmsta dagarna."
      )

      //Form submitted successfully - clear data
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage(
        "Ditt meddelande kunde inte skickas. Vänligen försök igen eller maila oss på info@pianomaster.se."
      )
    }
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <div className="contact-form-info">
          <h3>Frågor?</h3>
          <h2>Kontakta oss</h2>
        </div>
        <form onSubmit={handleSubmit} method="post">
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
