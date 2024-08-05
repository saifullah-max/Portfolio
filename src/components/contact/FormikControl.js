import React from 'react'
import { Field, ErrorMessage } from 'formik'
import './contact.css' 

function FormikControl(props) {
    const { control, name, label, ...rest } = props 
    switch(control){
        case 'input':
            return (
                <div >
                    <label htmlFor={name} className='form-label'>{label}</label>
                    <Field id={name} name={name} {...rest} className="form-input" />
                    <ErrorMessage name={name} className='form-error' component="div" />
                </div>
            )
        default:
            return null
    }
}

export default FormikControl