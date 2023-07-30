import React, {useState} from "react";

const Contact = () => {

    const[formStatus, setFormStatus] = useState('Send')
    const [isDisable, setIsDisable] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const boxStyle = {
        boxShadow: isDisable ? 'none' : '',
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Sended')
        setIsDisable(!isDisable)
        
        // const {name, email, message} = e.target.elements
        // let conFom = {
        //     name: name.value,
        //     email: email.value,
        //     message: message.value,
        // }
        // console.log(conFom)
    }

    return (
        <section className="contact_container" id="contact">
            <form className="form" onSubmit={onSubmit} >
            <h2 className="contact_container_text">
                Contact me
            </h2>
                <div className="form_line">
                    <input className="form_line_input" type="text" id="name" placeholder="Type your name" name="name" required
                    onChange={updateField}/>
                </div>
                <div className="form_line">
                    <input className="form_line_input" type="text" id="email" placeholder="Type your e-mail" name="email" required
                    onChange={updateField}/>
                </div>
                <div className="form_line form_text">
                    <textarea className="form_line_input" type="text" id="message" placeholder="Type your message" name="message" required
                    onChange={updateField}/>
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