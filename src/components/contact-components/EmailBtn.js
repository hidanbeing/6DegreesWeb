import emailjs from "emailjs-com";
import { useState } from "react";

function EmailBtn(props) {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const sendVerificationEmail = () => {
    // 이메일 보내기
    // 여기서 정의해야하는 것은 위에서 만든 메일 템플릿에 지정한 변수({{ }})에 대한 값을 담아줘야한다.
    const templateParams = {
      from_email: props.email,
      from_name: props.name,
      message: props.text,
    };

    emailjs
      .send(
        "inkitree", // 서비스 ID
        "default", // 템플릿 ID
        templateParams,
        "5PZ_z8N-_JCsSIbeT" // public-key
      )
      .then((response) => {
        console.log("이메일이 성공적으로 보내졌습니다:", response);
        setIsEmailSent(true);
        // 이메일 전송 성공 처리 로직 추가
      })
      .catch((error) => {
        console.error("이메일 보내기 실패:", error);
        // 이메일 전송 실패 처리 로직 추가
      });
  };

  const handleVerification = () => {
    sendVerificationEmail();
  };

  return (
    <>
      {isEmailSent ? (
        <p>이메일이 성공적으로 발송되었습니다.</p>
      ) : (
        <button className="email-button" onClick={handleVerification}>
          Submit
        </button>
      )}
    </>
  );
}

export default EmailBtn;
