import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';

// initialValues
// {
//     testName: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     isBusinessOwner: undefined
// }

/*
const DataEntrySchema = Yup.object().shape({
    email: Yup.string()
        .email(ValidationErrorMessageTypes.InvalidEmail)
        .required(ValidationErrorMessageTypes.Required),
    lastName: Yup.string()
        .min(2, ValidationErrorMessageTypes.ToShort)
        .max(150, ValidationErrorMessageTypes.ToLong)
        .required(ValidationErrorMessageTypes.Required),
    firstName: Yup.string()
        .min(2, ValidationErrorMessageTypes.ToShort)
        .max(150, ValidationErrorMessageTypes.ToLong)
        .required(ValidationErrorMessageTypes.Required),
    isBusinessOwner: Yup.bool()
        .required(ValidationErrorMessageTypes.Required)
  });
*/

/*
function renderForm() 
{
    return (
        <div className='container' display='flex'>
            <Form>
                <TextBoxFormikField placeholder="email" touched={touched} errors={errors} name="email" type="email" translatelabel="demo.email"/>
                <TextBoxFormikField placeholder="firstName" touched={touched} errors={errors} name="firstName" translatelabel="demo.firstName"/>
                <TextBoxFormikField placeholder="lastName" touched={touched} errors={errors} name="lastName" translatelabel="demo.lastName"/>
                <CheckBoxFormikField touched={touched} errors={errors} name="isBusinessOwner" checked={values.isBusinessOwner} translatelabel="demo.text1" label="ne prevodi"/>
                
                <Button variant={!isDisabled ? ButtonVariants.primary : ButtonVariants.disabled} size={ButtonSizes.small} disabled={isDisabled} type="submit">Submit</Button>
            </Form>
        </div>
    );
}
*/

function getfullClassName(classname, isValid) {
    let className = classname + ' ' + classname + '-form ' + classname + '-form__dataentry ';

    if (isValid !== null)
    {
        if (isValid === true) {
            className += classname + '-form__dataentry--isvalid';
        } 
        else  {
            className += classname + '-form__dataentry--invalid';
        }
    }

    return className;
}

const containsErrors = (errors) => (Object.keys(errors) && Object.keys(errors).length > 0)
const wasTouched = (touched) => (Object.keys(touched) && Object.keys(touched).length > 0)

const DataEntry = (props) =>
{   
    let {classname, title, initialValues, yupValidationSchema, onSubmit, renderForm} = props;

    const [isValid, setIsValid] = useState(null);
    
    let className = getfullClassName(classname, isValid);

    // TODO - while loading display global spinner
    let handleSubmitAsync = async (values, { setSubmitting }) => {
        setTimeout(() => {
    
            onSubmit(values);
                    
            setSubmitting(false);    
        }, 500);
    }

    return (
    <div className={className}>
        <div>
            <h1>{title}</h1>
            <Formik
                    initialValues={initialValues}
                    validationSchema={yupValidationSchema}
                    onSubmit={handleSubmitAsync}
            >
                {(props) => {
                        let { errors, touched, isSubmitting, values, isValid } = props;
                        let isDisabled = (!wasTouched(touched) || containsErrors(errors) || isSubmitting);
                        let isSubmitButtonEnabled = !isDisabled;
                        
                        if (wasTouched(touched)) {
                            setIsValid(isValid);
                        }

                        return (
                            <Form>
                                {renderForm(touched, errors, isSubmitButtonEnabled, values)}
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>            
    </div>
    );
}

export default DataEntry;

DataEntry.propTypes = {
    initialValues: PropTypes.any.isRequired,
    classname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    yupValidationSchema: PropTypes.any.isRequired,
    onSubmit: PropTypes.func.isRequired,
    renderForm: PropTypes.func.isRequired
};