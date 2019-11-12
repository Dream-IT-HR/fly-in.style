import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button, {ButtonVariants, ButtonSizes}  from '../../../_shared/components/Button/Button-component';
import {ValidationErrorMessageTypes} from '../../../_shared/components/ValidationErrorMessage/ValidationErrorMessage-component';

import CheckBoxFormikField from '../../../_shared/components/CheckBoxFormikField/CheckBoxFormikField-component';
import TextBoxFormikField from '../../../_shared/components/TextBoxFormikField/TextBoxFormikField-component';

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


const DataEntry = () => {
    const containsErrors = (errors) => (Object.keys(errors) && Object.keys(errors).length > 0);
    const wasTouched = (touched) => (Object.keys(touched) && Object.keys(touched).length > 0);
    
    const [userData, setUserData] = useState(null);
    const [isValid, setIsValid] = useState(null);

    // TODO - while loading display global spinner
    const handleSubmitAsync = async (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
      
          alert(JSON.stringify(values, null, 2));
          setUserData(values);
                
          setSubmitting(false);
      
      }, 500);
    }
    
    let className = "flydemo flydemo-form flydemo-form__dataentry";

    if (isValid !== null)
    {
        if (isValid === true) {
            className += " flydemo-form__dataentry__isvalid"
        } 
        else  {
            className += " flydemo-form__dataentry__invalid"
        }
    }

    return (
        <div className={className}>
            <div className='container' display='flex'>
                <h1>DataEntry</h1>
                    <Formik
                    initialValues={{
                        testName: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        isBusinessOwner: undefined
                    }}
                    validationSchema={DataEntrySchema}
                    onSubmit={handleSubmitAsync}
                    >
                    {(props) => {
                        // let { errors, touched, isSubmitting, status, values, isValid } = props;
                        let { errors, touched, isSubmitting, values, isValid } = props;
                        let isDisabled = (!wasTouched(touched) || containsErrors(errors) || isSubmitting);
                        
                        if (wasTouched(touched)) {
                            setIsValid(isValid);
                        }

                        return (
                            <Form>
                                <TextBoxFormikField placeholder="email" touched={touched} errors={errors} name="email" type="email" translatelabel="demo.email"/>
                                <TextBoxFormikField placeholder="firstName" touched={touched} errors={errors} name="firstName" translatelabel="demo.firstName"/>
                                <TextBoxFormikField placeholder="lastName" touched={touched} errors={errors} name="lastName" translatelabel="demo.lastName"/>
                                <CheckBoxFormikField touched={touched} errors={errors} name="isBusinessOwner" checked={values.isBusinessOwner} translatelabel="demo.text1" label="ne prevodi"/>
                                
                                <Button variant={!isDisabled ? ButtonVariants.primary : ButtonVariants.disabled} size={ButtonSizes.small} disabled={isDisabled} type="submit">Submit</Button>
                            </Form>
                        )
                    }
                }
                </Formik>
            </div>
        </div>
    )
};

export default DataEntry;

