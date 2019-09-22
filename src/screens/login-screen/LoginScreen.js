import React from 'reactn';
import googleService from '../../services/googleService';
import { PureComponent } from 'reactn';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

// const Button = lazy(() => import('../../_shared components/Button/Button'));

class FLogin extends PureComponent {    
  render() {
        return (
            <div className="container">
                {/* <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Login</Button>
                <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Google</Button> */}
             <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>

                <div>
                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Google Login"
                        onSuccess={googleService.handleGoogleResponseAsync}
                        onFailure={googleService.handleGoogleResponseAsync}
                    />
                </div>
            </div>
        );
    }
}

const Login = React.memo(FLogin);

export default Login;