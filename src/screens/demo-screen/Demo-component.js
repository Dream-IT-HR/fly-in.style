import React, {lazy} from 'reactn';
const Buttons = lazy(() => import('./Buttons/Buttons-component'));

const FDemo = () => {
    return (
        <div className="demo">
            <Buttons/>
        </div>
    );
}

const Demo = React.memo(FDemo);

export default Demo;