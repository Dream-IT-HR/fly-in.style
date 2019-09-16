import React, {lazy} from 'react';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';

const Button = lazy(() => import('../../_shared components/Button/Button'));

function fLogin() {    
        return (
            <div className="container">
                <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Login</Button>
                <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>Google</Button>
            </div>
        );
}
const Login = React.memo(fLogin);

export default Login;