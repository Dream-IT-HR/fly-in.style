import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Translate, {translator} from 'react-translate-component';
import Button from '../../_shared components/Button/Button';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';

import CheckBox from '../../_shared components/Formik/CheckBox';

const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
  
      alert(JSON.stringify(values, null, 2));
  
      setSubmitting(false);
  
  }, 1000);
  
}

const SignupSchema = Yup.object().shape({
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    // isBusinessOwner: Yup.bool()
    //   .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

const SignUp = () => (
<div>
    <h1>Signup</h1>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            isBusinessOwner: true
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        >
        {({ errors, touched, isSubmitting }) => (
            <Form>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                    <div>{errors.email}</div> 
                ) : null}

                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                ) : null}
                
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                ) : null}

                <CheckBox name="isBusinessOwner" translateContent="signUp.businessOwner" />

                {errors.isBusinessOwner && touched.isBusinessOwner ? (
                    <div>{errors.isBusinessOwner}</div>
                ) : null}
            
            <Button variant={ButtonVariants.primary} size={ButtonSizes.small} disabled={isSubmitting} type="submit">Submit</Button>

            </Form>
        )}
        </Formik>
    </div>
);

export default SignUp;