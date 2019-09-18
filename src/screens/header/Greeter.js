import React, {useGlobal} from 'reactn';
import Translate from 'react-translate-component';

function  FGreeter() {
    const [login, ] = useGlobal('login');

    return (
        <Translate name={login.nickname} lastname={''} content="global.greeting" />
    )
}

const Greeter = React.memo(FGreeter);

export default Greeter;
