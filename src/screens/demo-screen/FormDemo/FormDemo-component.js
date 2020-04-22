import React from 'react';
import Modal from '../../../_shared/components/Modal';
import Button, { ButtonVariants, ButtonSizes } from '../../../_shared/components/Button/Button-component';
import useModal from '../../../_shared/hooks/useModal';
import DataEntry, {FluentValidation, GetValidationSchema} from '../../../_shared/components/DataEntry/DataEntry-component';

const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
}

const initialValues =
{
    firstName: '',
    lastName: '',
    email: ''
}


const ValidationSchema = GetValidationSchema({
    firstName: FluentValidation()
        .isString()
        .isRequired()
        .min(2, 'Too Short!')
        .max(10)
        .Rule,
    
    email: FluentValidation()
        .isString()
        .isEmail()
        .isRequired()
        .Rule
  });

const FormDemo = (props) => {
    const [isShowing, toggle] = useModal();

    const handleButtonClick = (e) => {
        toggle();
    }

    return (
        <div className="flydemo-form">
            <Button variant={ButtonVariants.primary} size={ButtonSizes.small} onClick={(e) => handleButtonClick(e)}>Open submit modal form</Button>
            <Modal isShowing={isShowing} hide={toggle}>
                <DataEntry
                    initialValues={initialValues}
                    classname="flydemo"
                    title="form demo"
                    validationSchema={ValidationSchema}
                    onSubmit={onSubmit}
                />
            </Modal>
        </div>
    );
}

export default FormDemo;
