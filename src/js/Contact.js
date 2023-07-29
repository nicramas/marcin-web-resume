import React, {useState} from "react";

const Contact = () => {

    const[formStatus, setFormStatus] = useState('Send')
    const [isDisable, setIsDisable] = useState(false)

    const boxStyle = {
        boxShadow: isDisable ? 'none' : '',
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Sended')
        setIsDisable(!isDisable)
        const {name, email, message} = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }

    return (
        <section className="contact_container" id="contact"
        style={{
            backgroundColor: "rgb(var(--color-blue))",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            padding:"6rem",
            color:"rgb(var(--color-white))",
        }}>
            <form className="form" onSubmit={onSubmit} >
            <h2
            style={{
                paddingBottom:"1.5rem",
                fontSize:"1.5rem",
                fontWeight:"500"
            }}>Contact me</h2>
                <div className="form_line">
                    <input className="form_line_input" type="text" id="name" placeholder="Type your name" required/>
                </div>
                <div className="form_line">
                    <input className="form_line_input" type="text" id="email" placeholder="Type your e-mail" required/>
                </div>
                <div className="form_line form_text">
                    <textarea className="form_line_input" type="text" id="message" placeholder="Type your message" required/>
                </div>
                <button className="btn btnSmall" type="submit" disabled={isDisable}
                    style={boxStyle}>
                    {formStatus}
                </button>
            </form>
        </section>
    )
}

export default Contact