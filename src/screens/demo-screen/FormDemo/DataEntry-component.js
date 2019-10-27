import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button, {ButtonVariants, ButtonSizes}  from '../../../_shared/components/Button/Button-component';
import {ValidationErrorMessageTypes} from '../../../_shared/components/Formik/ValidationErrorMessage';

import FormikTextBox from '../../../_shared/components/Formik/FormikTextBox';
import CheckBoxFormikField from '../../../_shared/components/CheckBoxFormikField/CheckBoxFormikField-component';
import TextBoxFormikField from '../../../_shared/components/TextBoxFormikField/TextBoxFormikField-component';

const DataEntrySchema = Yup.object().shape({
    email: Yup.string()
        .email(ValidationErrorMessageTypes.InvalidEmail)
        .required(ValidationErrorMessageTypes.Required),
    // testName: Yup.string()
    //     .min(2, ValidationErrorMessageTypes.ToShort)
    //     .max(150, ValidationErrorMessageTypes.ToLong)
    //     .required(ValidationErrorMessageTypes.Required),
    // lastName: Yup.string()
    //     .min(2, ValidationErrorMessageTypes.ToShort)
    //     .max(150, ValidationErrorMessageTypes.ToLong)
    //     .required(ValidationErrorMessageTypes.Required),
    // firstName: Yup.string()
    //     .min(2, ValidationErrorMessageTypes.ToShort)
    //     .max(150, ValidationErrorMessageTypes.ToLong)
    //     .required(ValidationErrorMessageTypes.Required),
    
    // isBusinessOwner: Yup.bool()
    //     .required(ValidationErrorMessageTypes.Required)
  });


const DataEntry = () => {
    const containsErrors = (errors) => (Object.keys(errors) && Object.keys(errors).length > 0);
    const wasTouched = (touched) => (Object.keys(touched) && Object.keys(touched).length > 0);
    
    const [userData, setUserData] = useState(null);
    // const [ error, loading, data ] = useEffectAsync(usersService.RegisterAsync, userData, 0, true);
    // const [,,] = useEffectAsync(usersService.RegisterAsync, userData, 0, true);
    
    // TODO - while loading display global spinner
    const handleSubmitAsync = async (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
      
          alert(JSON.stringify(values, null, 2));
          setUserData(values);
                
          setSubmitting(false);
      
      }, 500);
    }
    
    return (
        <div className='flydemo flydemo-form flydemo-form-dataentry'>
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
                {({ errors, touched, isSubmitting, status, values }) => {
                    let isDisabled = (!wasTouched(touched) || containsErrors(errors) || isSubmitting);

                    return (
                        <Form>
                            <TextBoxFormikField placeholder="email" touched={touched} errors={errors} name="email" type="email" translateLabel="demo.text1"/>
                            <TextBoxFormikField placeholder="firstName" touched={touched} errors={errors} name="firstName" translateLabel="demo.text1"/>
                            <TextBoxFormikField placeholder="lastName" touched={touched} errors={errors} name="lastName" translateLabel="demo.text1"/>
                            <CheckBoxFormikField touched={touched} errors={errors} name="isBusinessOwner" checked={values.isBusinessOwner} translateLabel="demo.text1" label="ne prevodi"/>
                            
                            {/*                             
                            <Field name="email" type="email" />
                            <ErrorMessage name="email">
                            {
                                (errorMessage) => <div>
                                    {errors.email && touched.email ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>

                            <Field name="firstName"/>
                            <ErrorMessage name="firstName">
                            {
                                (errorMessage) => <div>
                                    {errors.firstName && touched.firstName ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>
                            
                            <Field name="lastName" />
                            <ErrorMessage name="lastName">
                            {
                                (errorMessage) => <div>
                                    {errors.lastName && touched.lastName ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>

                            <CheckBox name="isBusinessOwner" translateContent="DataEntry.businessOwner" />
                            <ErrorMessage name="isBusinessOwner">
                            {
                                (errorMessage) => <div>
                                    {errors.isBusinessOwner && touched.isBusinessOwner ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>
                         */}
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

