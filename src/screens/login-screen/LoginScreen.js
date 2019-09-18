import React from 'reactn';
import * as authService from '../../services/authService';
import config from '../../config.json';
import { GoogleLogin } from 'react-google-login';
import { PureComponent } from 'reactn';
import LocalToken from '../../_shared components/LocalToken';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// const Button = lazy(() => import('../../_shared components/Button/Button'));

class FLogin extends PureComponent {    
  googleResponse = (response) => {
    if (!response.tokenId) {
      console.error("Unable to get tokenId from Google", response)
      return;
    }

    const tokenBlob = new Blob([JSON.stringify({ tokenId: response.tokenId }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    
    let loggedInUser = null;
    fetch(config.GOOGLE_AUTH_CALLBACK_URL, options)
        .then(r => {
          r.json().then(login => {
            const token = login.token;
            loggedInUser = authService.GetValidUserFromToken(token);
            
            LocalToken.SetTokenToLocalStorage(token);
            this.setGlobal({login: loggedInUser});
          });
        })
  };

function fLogin() {    
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
                        onSuccess={googleResponse}
                        onFailure={googleResponse}
                    />
                </div>
            </div>
        );
}

const Login = React.memo(FLogin);

export default Login;