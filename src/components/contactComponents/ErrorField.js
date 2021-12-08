import React from 'react';

const ErrorField = ({message}) => {

    return (
        <div className="field-error">
            <p>{message}</p>
        </div>
    );
}

export default ErrorField;