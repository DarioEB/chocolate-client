import React, { useContext, useState } from 'react';
import ErrorField from './ErrorField';
// Context de contacto
import contactContext from '../../context/contact/contactContext';

function validationError(values) {
    let errors = {};
    if(!values.name) {
        errors.name = 'El Nombre es olbigatorio'
    }
    // Valicación del email
    if (!values.email) {
        errors.email = 'El E-mail es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email no válido"
    }
    if(!values.subject) {
        errors.subject = 'El Asunto es obligatorio'
    }
    if(!values.message) {
        errors.message = 'El mensaje no puede ir vacío';
    }

    return errors;
}

const FormContact = () => {
    // Contact de contact
    const ContactContext = useContext(contactContext);
    const { sendEmail } = ContactContext;

    const [error, setError] = useState({})
    // State de contact
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        let errors = validationError(contact);
        setError(errors);
        const noErrors = Object.keys(errors).length === 0;
        if(noErrors) {
            sendEmail(contact);
            setContact({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }
    }

    // if(loadContact) return <Spin />

    const { name, email, subject, message} = contact;

    return(
        <div className="content-form">
            <form
                onSubmit={handleSubmit}
            >
                <div className="field">
                    <label htmlFor="name">Nombre (*)</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                    {error.name && <ErrorField message={error.name} />}
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail (*)</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                    {error.email && <ErrorField message={error.email} />}
                </div>
                <div className="field">
                    <label htmlFor="subject">Asunto (*)</label>
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleChange}
                        value={subject}
                    />
                    {error.subject && <ErrorField message={error.subject} />}
                </div>
                <div className="field">
                    <label htmlFor="message">Mensaje (*)</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={message}
                    ></textarea>
                    {error.message && <ErrorField message={error.message} />}
                </div>

                <div className="box-submit">
                    <input 
                        type="submit"
                        value="Enviar"
                        className="submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormContact;