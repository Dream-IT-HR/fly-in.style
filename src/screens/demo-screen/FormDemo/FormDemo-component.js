import React, { useEffect } from 'react';
import Modal from '../../../_shared/components/Modal';
import Button, {ButtonVariants, ButtonSizes} from '../../../_shared/components/Button/Button-component';
import useModal from '../../../_shared/hooks/useModal';
import DataEntry from '../../../_shared/components/DataEntry/DataEntry-component';
import * as Yup from 'yup';
import {ValidationErrorMessageTypes} from '../../../_shared/components/ValidationErrorMessage/ValidationErrorMessage-component';
import CheckBoxFormikField from '../../../_shared/components/CheckBoxFormikField/CheckBoxFormikField-component';
import TextBoxFormikField from '../../../_shared/components/TextBoxFormikField/TextBoxFormikField-component';

const initialValues =
{
    testName: '',
    firstName: '',
    lastName: '',
    email: '',
    isBusinessOwner: undefined
}

const dataEntrySchema = Yup.object().shape({
    email: Yup.string()
        .email(ValidationErrorMessageTypes.InvalidEmail)
        .required(ValidationErrorMessageTypes.Required),
    lastName: Yup.string()
        .min(2, ValidationErrorMessageTypes.ToShort)
        .max(150, ValidationErrorMessageTypes.ToLong)
        .required(ValidationErrorMessageTypes.Required),
    firstName: Yup.string()
        .min(2, ValidationErrorMessageTypes.ToShort)
        .max(150, ValidationErrorMessageTypes.ToLong)
        .required(ValidationErrorMessageTypes.Required),
    isBusinessOwner: Yup.bool()
        .required(ValidationErrorMessageTypes.Required)
  });

function renderForm(touched, errors, isSubmitButtonEnabled, values) 
{
    return (
        <div className='container' display='flex'>
            <TextBoxFormikField placeholder="email" touched={touched} errors={errors} name="email" type="email" translatelabel="demo.email"/>
            <TextBoxFormikField placeholder="firstName" touched={touched} errors={errors} name="firstName" translatelabel="demo.firstName"/>
            <TextBoxFormikField placeholder="lastName" touched={touched} errors={errors} name="lastName" translatelabel="demo.lastName"/>
            <CheckBoxFormikField touched={touched} errors={errors} name="isBusinessOwner" checked={values.isBusinessOwner} translatelabel="demo.text1" label="ne prevodi"/>
            
            <Button variant={isSubmitButtonEnabled ? ButtonVariants.primary : ButtonVariants.disabled} size={ButtonSizes.small} disabled={!isSubmitButtonEnabled} type="submit">Submit</Button>
        </div>
    );
}

const onSubmit = (values) => 
{
    alert(JSON.stringify(values, null, 2));
}

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
                    classname="flydemo"
                    title="form demo"
                    initialValues = {initialValues}
                    yupValidationSchema = {dataEntrySchema}
                    onSubmit={onSubmit}
                    renderForm={renderForm}
                />
            </Modal>            
        </div>
    );
}

export default FormDemo;
