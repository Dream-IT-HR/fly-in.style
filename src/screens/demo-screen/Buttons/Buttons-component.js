import React from 'react';
import Button, {ButtonVariants, ButtonSizes} from '../../../_shared/components/Button/Button-component';

const handleButtonClick = (e) => {
    alert('button clicked');
}

const FButtons = (props) => {
    return (
        <div className="demo-buttons">
            <Button variant={ButtonVariants.primary} size={ButtonSizes.normal} onClick={(e) => handleButtonClick(e)}>Primary</Button>
            <Button variant={ButtonVariants.secondary} size={ButtonSizes.large}>Secondary</Button>
            <Button variant={ButtonVariants.disabled} size={ButtonSizes.small} >Disabled</Button>
            <Button variant={ButtonVariants.dark} size={ButtonSizes.normal}>Dark</Button>
        </div>
    );
}

const Buttons = React.memo(FButtons);

export default Buttons;
