import React, {lazy} from 'reactn';

const ButtonsDemo = lazy(() => import('./ButtonsDemo/ButtonsDemo-component'));
const LocaleSwitcherDemo = lazy(() => import('./LocaleSwitcherDemo/LocaleSwitcherDemo-component'));
const ModalDemo = lazy(() => import('./ModalDemo/ModalDemo-component'));
const FormDemo = lazy(() => import('./FormDemo/FormDemo-component'));

const FDemo = () => {
    return (
        <div className="flydemo">
            <ButtonsDemo/>
            <LocaleSwitcherDemo/>
            <ModalDemo/>
            <FormDemo/>
        </div>
    );
}

const Demo = React.memo(FDemo);

export default Demo;