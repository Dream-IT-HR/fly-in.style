import React, {useGlobal} from 'reactn';
import * as authService from '../../services/authService';
import config from '../../config.json';
import { GoogleLogin } from 'react-google-login';
import { PureComponent } from 'reactn';
import { resolve } from 'q';

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
            this.setGlobal({login: loggedInUser});
          });
        })
  };


  render() {
    return (
      <div className="container">
        {/* <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Login</Button>
          <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Google</Button> */}
          <div>
              <GoogleLogin
                  clientId={config.GOOGLE_CLIENT_ID}
                  buttonText="Google Login"
                  onSuccess={this.googleResponse}
                  onFailure={this.googleResponse}
              />
          </div>
      </div>
    );
  }
}

const Login = React.memo(FLogin);

export default Login;