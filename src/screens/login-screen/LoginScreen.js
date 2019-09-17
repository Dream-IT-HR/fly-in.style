import * as authService from '../../services/authService';
import config from '../../config.json';
import React, {lazy} from 'react';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';
import { GoogleLogin } from 'react-google-login';

const Button = lazy(() => import('../../_shared components/Button/Button'));


const googleResponse = (response) => {
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
    fetch(config.GOOGLE_AUTH_CALLBACK_URL, options)
      .then(r => {
        console.log(r);

        r.json().then(response => {
          const token = response.token;
          console.log(token);
          
          authService.UserIsValid(token);
          // this.props.login(token);
        });
      })
  };

function fLogin() {    
        return (
            <div className="container">
                {/* <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Login</Button>
                <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Google</Button> */}
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
const Login = React.memo(fLogin);

export default Login;