
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import "./styles/Portfolio.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || isSending) return;

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_rslr7oq",
        "template_j78ytnu",
        form.current,
        "LdSDnEO3d3iuhZ5Qw"
      );

      form.current.reset();
      setStatus({
        type: "success",
        message: "Your message has been sent successfully. Thank you for reaching out!",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Your message couldn't be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-sec" id="contact" aria-labelledby="contact-title">
      <div className="section-intro">
        <span className="section-label">Get in touch</span>
        <h2 id="contact-title">
          Let's start a <span className="color">conversation.</span>
        </h2>
        <p>
          Have an opportunity, a project idea, or simply want to connect?
          I'd love to hear from you. Send me a message and I'll get back to you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <div className="contact-side-heading">
            <h3>Let's connect</h3>
            <p>
              I'm interested in frontend development opportunities,
              collaborations, and projects that help me grow.
            </p>
          </div>

          <a
            className="contact-card"
            href="mailto:onyejekwechinaza2027@gmail.com"
          >
            <span className="contact-icon">
              <Mail size={20} />
            </span>
            <span className="contact-card-content">
              <span className="contact-card-label">Email me</span>
              <span className="contact-card-value">
                onyejekwechinaza2027@gmail.com
              </span>
            </span>
            <ArrowUpRight className="contact-card-arrow" size={18} />
          </a>

          <div className="contact-card">
            <span className="contact-icon">
              <MapPin size={20} />
            </span>
            <span className="contact-card-content">
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">Anambra State, Nigeria</span>
            </span>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <BriefcaseBusiness size={20} />
            </span>
            <span className="contact-card-content">
              <span className="contact-card-label">Opportunities</span>
              <span className="contact-card-value">
                Frontend roles and collaborations
              </span>
            </span>
          </div>

          <p className="contact-note">
            Prefer email? You can contact me directly at the address above.
          </p>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span className="contact-form-kicker">Send a message</span>
            <h3>Tell me what you have in mind.</h3>
            <p>Fill in the details below and I'll be in touch.</p>
          </div>

          <form
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact-field">
              <label htmlFor="user_name">Your name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="user_email">Email address</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me a little about your opportunity or project..."
                rows={5}
                required
              />
            </div>

            {status && (
              <p
                className={`contact-status ${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending message..." : "Send message"}
              {!isSending && <ArrowUpRight size={18} />}
            </button>

            <p className="contact-form-footnote">
              Your details will only be used to respond to your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;