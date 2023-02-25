
/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { CgClose } from "react-icons/cg"


const ContactOneForm = () => {

  const [show, setShow] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (event) => {
    console.log("event", event)
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactForm",
        "name": event.target.elements.name.value,
        "email": event.target.elements.email.value,
        "phone": event.target.elements.phone.value,
        "msg": event.target.elements.msg.value,
      })
    }).then(() => { setShow(true); document.getElementById("myForm").reset() }).catch(error => alert(error))
  }


  return (
    <div sx={ContactForm} >
      <Styled.h2 sx={Heading}>
        Get In Touch
      </Styled.h2>
      {show ? <div className="alert-box" id="alert" sx={{ top: [null, "0%", "0%", "30%"], p: "10px", position: "fixed", zIndex: "50", width: [null, "70%", "45%"], left: [null, "14.5%", "25%"], height: "200px", margin: "auto", background: "white", color: "black" }}>
        <div sx={{ textAlign: "right", margin: "10px", fontSize: [null, "1rem", "1.2rem", "1.35rem"], }} ><CgClose onClick={() => { setShow(false); document.getElementById("myForm").reset() }} sx={{ cursor: "pointer" }} /></div>
        <div sx={{ mt: "35px", textAlign: "center", fontWeight: "550", fontSize: [null, "1rem", "1.2rem", "1.35rem"], }}><FaCheckCircle sx={{ color: "green", mb: "6px", }} /><Styled.p>Thank you. Your form is submitted successfully</Styled.p></div>
      </div> : null}
      <div sx={Separator} />
      <form id="myForm" netlify="true" name="contactForm" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input sx={Input} type="text" name="name" label="Name" title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}" placeholder="Name" required />
        <input sx={Input} label="Email" type="mail" name="email" title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" required />
        <input sx={Input} label="Mobile Number" type="tel" name="phone" className="phone" placeholder="Phone" required />
        <textarea sx={Textarea} placeholder="Message" label="Message" type="text" name="msg" required />
        <button sx={Submit} type="submit" className="contactFormbtn">
          <span sx={{ position: "relative", top: "0", color: "#fff", zIndex: "10" }}>
            SUBMIT
          </span>
        </button>
      </form>
    </div>
  )

}



export default ContactOneForm



const Separator = {
  height: "5px",
  width: "50px",
  backgroundColor: "templatePrimary",
  marginBottom: "30px",
  marginLeft: "6px;",
}

const ContactForm = {
  padding: "40px",
  width: "100%",
  backgroundColor: "#111",
}

const Heading = {
  fontFamily: "Century Gothic",
  color: "#fff",
}

const InputElement = {
  margin: "20px 0",
}


const Input = {
  width: "100%",
  margin: "10px 0",
  backgroundColor: "#111",
  border: "none",
  borderBottom: "1px solid #444",
  padding: "10px 5px",
  borderRadius: "0",
  color: "#fff",
  transition: ".5s",
  ":focus": {
    borderBottom: "1px solid templatePrimary",
    outline: "none"
  }
}

const Textarea = {
  width: "100%",
  backgroundColor: "#111",
  border: "none",
  borderBottom: "1px solid #444",
  padding: "10px 5px",
  borderRadius: "0",
  color: "rgb(255, 255, 255)",
  transition: "all 0.5s ease 0s",
  minHeight: "100px",
  marginTop: "0px",
  marginBottom: "0px",
  height: "100px",
  resize: "none",
  ":focus": {
    borderBottom: "1px solid templatePrimary",
    outline: "none",
  }
}

const Submit = {
  display: "block",
  height: "50px",
  width: "186px",
  position: "relative",
  border: "none",
  overflow: "hidden",
  transition: ".5s",
  margin: "20px 0"
}