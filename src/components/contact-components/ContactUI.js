import { useState } from "react";
import "./Contact.css";
import EmailBtn from "./EmailBtn";
function ContactUI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="contact-main">
      <div className="title">Contact Our Team</div>
      <div className="first">
        <div className="name-div">
          <label for="name">Name*</label>
          <input
            id="name"
            placeholder="이름/소속"
            src={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email-div">
          <label for="email">Email*</label>
          <input
            id="email"
            placeholder="이메일"
            src={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="second">
        <div className="message-div">
          <label for="message">message*</label>
          <textarea
            id="message"
            name="story"
            rows="15"
            cols="80"
            placeholder="문의 사항을 입력해주세요"
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
        </div>
        <EmailBtn name={name} email={email} text={text} />
      </div>
    </div>
  );
}

export default ContactUI;
