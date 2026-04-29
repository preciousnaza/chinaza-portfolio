import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();

     if (!form.current) return;

    emailjs.sendForm(
      "service_rslr7oq",
      "template_j78ytnu",
      form.current,
      "LdSDnEO3d3iuhZ5Qw"
    )
    .then(() => {
      alert("Message sent!");
    })
    .catch(() => {
      alert("Failed to send.");
    });

    e.currentTarget.reset();
  };

  return (
    <section className="contact-sec" id="contact">
      <div className="section-intro">
        <span className="section-label">Contact</span>
        <h2>Let’s build something great together</h2>
        <p className="color-wh">
          I’m open to new opportunities and collaborations. If you want a frontend developer
          who delivers clean, responsive websites with modern polish, send a message and let’s connect.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <div className="contact-card">
            <h3>Email</h3>
            <p>onyejekwechinaza2027@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>Location</h3>
            <p>Anambra state, Nigeria</p>
          </div>
          <div className="contact-card">
            <h3>Availability</h3>
            <p>Open for freelance & full-time roles</p>
          </div>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your name" />
          <input type="email" name="user_email" placeholder="Your email" />
          <textarea name="message" placeholder="Tell me about your project"></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact
