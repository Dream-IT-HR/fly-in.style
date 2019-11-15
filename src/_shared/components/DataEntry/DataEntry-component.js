import PropTypes from 'prop-types';
import React from 'react';
import { useFormik, useField } from 'formik';
import * as Yup from 'yup';

const getfullClassName = (classname, isValid) => {
    let className = classname + ' ' + classname + '-form ' + classname + '-form__dataentry ';

    if (isValid !== null) {
        if (isValid === true) {
            className += classname + '-form__dataentry--isvalid';
        }
        else {
            className += classname + '-form__dataentry--invalid';
        }

        className += ' form__dataentry';
    }

    return className;
}

const MyTextField = (props) => {
    let { name, label, type, handleChange, handleBlur, values, touched, errors } = props;

    let isTouched = touched[name];
    let errorMessage = errors[name];

    return (
        <>
            <label htmlFor={name}>
                {label}
                <input
                    id={name}
                    name={name}
                    type={type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                />
            </label>
            {isTouched && errorMessage ? (
                <div className="error">{errorMessage}</div>
            ) : null}
        </>
    );
};

const DataEntry = (props) => {
    let { initialValues, classname, title, validationSchema, onSubmit, renderForm } = props;

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    const fullClassName = getfullClassName(classname, formik.isValid);

    const handleSubmit = (values) => {
        onSubmit(values);

        formik.setSubmitting(false);
    }


    return (
        <div className={fullClassName}>
            <form onSubmit={formik.handleSubmit}>
                <MyTextField name="firstName" type="text" label="First Name" {...formik} />
                <MyTextField name="lastName" type="text" label="Last Name" {...formik} />
                <MyTextField name="email" type="email" label="Email" {...formik} />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DataEntry;

DataEntry.propTypes = {
    initialValues: PropTypes.any.isRequired,
    classname: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    validationSchema: PropTypes.any.isRequired,
    //     onSubmit: PropTypes.func.isRequired,
    //     renderForm: PropTypes.func.isRequired
};

export const FluentValidation = () => {
    return new FluentValidationType();
};

export const GetValidationSchema = (rules) => {
    return Yup.object().shape(rules);
}

class FluentValidationType {
    Rule = {};

    isString() {
        this.Rule = Yup.string();
        return this;
    }

    isEmail() {
        this.Rule = this.Rule.email('invalid email');
        return this;
    }

    isRequired() {
        this.Rule = this.Rule.required('required');
        return this;
    }

    min(length, errorMessage) {
        if (errorMessage === undefined) {
            errorMessage = 'Minimum of ' + length + ' characters required.';
        } 

        this.Rule = this.Rule.min(length, errorMessage);

        return this;
    }

    max(length, errorMessage) {
        if (errorMessage === undefined) {
            errorMessage = 'Maximum of ' + length + ' characters exceeded.';
        } 

        this.Rule = this.Rule.max(length, errorMessage);

        return this;
    }
}