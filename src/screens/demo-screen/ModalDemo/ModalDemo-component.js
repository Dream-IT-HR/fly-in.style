import React, { useEffect } from 'react';
import Modal from '../../../_shared/components/Modal';
import Button, {ButtonVariants, ButtonSizes} from '../../../_shared/components/Button/Button-component';
import useModal from '../../../_shared/hooks/useModal';

const FModal = (props) => {
    const [isShowing, toggle] = useModal();

    const handleButtonClick = (e) => {
        toggle();
    }

    return (
        <div className="flydemo-modal">
            <Button variant={ButtonVariants.dark} size={ButtonSizes.normal} onClick={(e) => handleButtonClick(e)}>Toggle modal form</Button>
            <Modal isShowing={isShowing} hide={toggle}>
                    <div>This is a modal form. Any component can be it's child.</div>
            </Modal>
        </div>
    );
}

const ModalDemo = React.memo(FModal);

export default ModalDemo;
