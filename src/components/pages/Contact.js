import { useState, useRef } from "react";
import React from "react";
import { validateEmail } from "../../utils/helper";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmit, setFormSubmit] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Name is require!");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Email is NOT valid!");
      return;
    }
    if (!message) {
      setErrorMessage("Message is require!");
      return;
    }

    setFormSubmit({
      name: name,
      email: email,
      message: message,
    });
    setName("");
    setEmail("");
    setMessage("");
    alert("Your email was successfully sent!");
    emailjs
      .sendForm(
        "service_0pqh9nj",
        "template_yp8b3jm",
        form.current,
        "m4Yivp1nuvZuQ_GT9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <main>
      <div>
        <div id="contact-container">
          <h2>Contact</h2>
          <form ref={form} className="form">
            <div>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder={
                  errorMessage.includes("Name")
                    ? errorMessage
                    : "Please enter your name"
                }
              />
              {errorMessage.includes("Name") && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
            <br />
            <div>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder={
                  errorMessage.includes("Email")
                    ? errorMessage
                    : "Please enter your Email"
                }
              />
              {errorMessage.includes("Email") && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
            <br />
            <div>
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                placeholder={
                  errorMessage.includes("Message")
                    ? errorMessage
                    : "Please enter your text here!"
                }
              />
              {errorMessage.includes("Message") && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
            <br />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        {errorMessage.includes("sent") && (
          <div id="submit-msg">
            <h4 className="submit-text">{formSubmit}</h4>
          </div>
        )}
      </div>
    </main>
  );
};

export default Contact;
