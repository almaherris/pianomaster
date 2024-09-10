import "./Map.css" // Import the CSS file

export const Map = () => {
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7260.295107074057!2d13.84484880690014!3d58.38985377322006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDIzJzIzLjQiTiAxM8KwNTAnNDAuNiJF!5e0!3m2!1sen!2sse!4v1717937803097!5m2!1sen!2sse"
  return (
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
    </div>
  )
}
