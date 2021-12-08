import React, { useReducer } from 'react';
import {
    CONTACT,
    CONTACT_SUCCESS,
    CONTACT_FAILED
} from '../../types';

import contactReducer from './contactReducer';
import contactContext from './contactContext';

import client from '../../config/axios';

// Sweetalert2
import Swal from 'sweetalert2';
const ContactState = ({children}) => {

    const initialState = {
        contact: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        loadContact: null,
        errorContact: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    const sendEmail = async (contact) => {
        dispatch({
            type: CONTACT,
            payload: contact
        });
        try {
            const response = await client.post('/api/contact', contact);
            dispatch({
                type: CONTACT_SUCCESS,
                payload: response.data.message
            })
            Swal.fire({
                title: 'Mensaje enviado',
                text: `${contact.name}, tu mensaje se envió correctamente.`,
                type: 'success',
                background: '#000000',
                allowOutsideClick: false,
                confirmButtonText: 'Volver',
                customClass: {
                    popup: 's-container',
                    title: 's-title',
                    htmlContainer: 's-text',
                    confirmButton: 's-btn',
                }
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: CONTACT_FAILED
            })
            Swal.fire({
                title: 'Error al enviar el mensaje',
                text: `${contact.name}, tu mensaje no pudo ser enviado, intenta de nuevo más tarde.`,
                type: 'error',
                background: '#000000',
                allowOutsideClick: false,
                confirmButtonText: 'Volver',
                customClass: {
                    popup: 's-container',
                    title: 's-title',
                    htmlContainer: 's-text',
                    confirmButton: 's-btn',
                }
            });
        }
    }


    return (
        <contactContext.Provider
            value={{
                contact: state.contact,
                loadContact: state.loadContact,
                errorContact: state.errorContact,
                sendEmail
            }}
        >
            {children}
        </contactContext.Provider>
    );
}

export default ContactState;