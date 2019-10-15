import React, { useEffect } from 'react';
import Modal from '../../../_shared/components/Modal';
import Button, {ButtonVariants, ButtonSizes} from '../../../_shared/components/Button/Button-component';
import useModal from '../../../_shared/hooks/useModal';
import DataEntry from './DataEntry-component';

const FForm = (props) => {
    const [isShowing, toggle] = useModal();

    const handleButtonClick = (e) => {
        toggle();
    }

    return (
        <div className="flydemo-form">
            <Button variant={ButtonVariants.primary} size={ButtonSizes.small} onClick={(e) => handleButtonClick(e)}>Open submit modal form</Button>
            <Modal isShowing={isShowing} hide={toggle}>
                <DataEntry/>
            </Modal>            
        </div>
    );
}

const FormDemo = React.memo(FForm);

export default FormDemo;
