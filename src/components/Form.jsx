import { useState } from "react";
import { sendMail } from "../assets/code/email";


const ClientForm = () => {

    const [formDetails, setFormDetails] = useState({
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (window.Email) {
            sendMail(formDetails)
            setFormDetails({
                email: '',
                message: '',
            })
        }

    }

    return (
        <div>
            <form action="submit" className="con-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" className="con-email"  onChange={handleChange} value={formDetails.email} required name="email"/>
                <textarea type="text" rows="4" placeholder="Please enter a message" onChange={handleChange} value={formDetails.message} required name="message"/>
                <input type="submit" value="SEND" className="con-send" />
            </form>
        </div>
    )
}

export default ClientForm;