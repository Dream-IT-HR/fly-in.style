import React from 'reactn';
import { Redirect } from 'react-router-dom';
import googleService from '../../services/googleService';
import { PureComponent } from 'reactn';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

// const Button = lazy(() => import('../../_shared components/Button/Button'));

class FLogin extends PureComponent {    
  constructor(props) {
    super(props);
    
    this.state = {
      callerLocation: this.props.location.state.from,
      redirectToCaller: false
    };
  }

  handleGoogleResponseAsync = async (response) => {
    await googleService.handleGoogleResponseAsync(response);
    
    this.setState({
       redirectToCaller: true
    })
  }

  render() {
      let callerLocation = this.state.callerLocation;

      return (
            (!this.state.redirectToCaller ?
              
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
                        onSuccess={this.handleGoogleResponseAsync}
                        onFailure={googleService.handleGoogleResponseAsync}
                        redirectUri={this.props.location.state.from.pathname}
                    />
                </div>
            </div>
            :
            <Redirect to={
              {
                  pathname: callerLocation.pathname
              }} />
            )
        );
    }
}

const Login = React.memo(FLogin);

export default Login;