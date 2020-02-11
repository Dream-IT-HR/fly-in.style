import React, { useState } from 'react';
import Modal from '../../../_shared/components/Modal';
import Button, {ButtonVariants, ButtonSizes} from '../../../_shared/components/Button/Button-component';
import useModal from '../../../_shared/hooks/useModal';

import useEffectAsync from '../../../_shared/hooks/useEffectAsync';

import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import {
    CircleLoader, BounceLoader, ClimbingBoxLoader, DotLoader, FadeLoader, GridLoader, HashLoader} from 'react-spinners';

 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

async function SomeCallAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {  
            alert('gotovo');
            resolve(['data', 'data2', 'data3']);
        }, 2000);  
    });  
}

async function SomeCall2Async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            alert('gotovo');
            reject('this is an error');
        }, 2000);  
    });  
}


const loadingOnChangeTriggerDefault = 'dummy';
const loadingOnChangeTrigger2Default = 'dummy';

const FSpinner = (props) => {
    const [loadingOnChangeTrigger, setLoadingOnChangeTrigger] = useState(loadingOnChangeTriggerDefault);
    const [loadingOnChangeTrigger2, setLoadingOnChangeTrigger2] = useState(loadingOnChangeTrigger2Default);
    
    const [isShowing, toggle] = useModal();
    const [loading] = useEffectAsync(SomeCallAsync, loadingOnChangeTrigger, 0, true);
    const [error2, loading2] = useEffectAsync(SomeCall2Async, loadingOnChangeTrigger2, 0, true);

    if (error2) 
    {
        throw new Error(error2);
    }
    const handleButtonClick = (e) => {
        toggle();
    }

    const showSpinner = (e) => {
        setLoadingOnChangeTrigger(loadingOnChangeTrigger + '_');
    }
    const showSpinnerException = (e) => {
        setLoadingOnChangeTrigger2(loadingOnChangeTrigger2 + '_');
    }

    return (
        <div className="flydemo-spinner">
            <Button variant={ButtonVariants.dark} size={ButtonSizes.normal} onClick={(e) => handleButtonClick(e)}>Toggle Spinner form</Button>
            <Modal isShowing={isShowing} hide={toggle}>
                    <div>This is a Modal form. Any component can be it's child.</div>
                    <Button variant={ButtonVariants.primary} size={ButtonSizes.small} onClick={(e) => showSpinner(e)}>Show spinner</Button>
                    <Button variant={ButtonVariants.primary} size={ButtonSizes.small} onClick={(e) => showSpinnerException(e)}>Show spinner with exception in promise</Button>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={loading || loading2}
                    />
                    <BeatLoader loading={loading || loading2}/>
                    <CircleLoader loading={loading || loading2}/>
                    <BounceLoader loading={loading || loading2}/>
                    <ClimbingBoxLoader loading={loading || loading2}/>
                    <DotLoader loading={loading || loading2}/>
                    <FadeLoader loading={loading || loading2}/>
                    <GridLoader loading={loading || loading2}/>
                    <HashLoader loading={loading || loading2}/>
                    {/* <MoonLoader loading={loading || loading2}/>
                    <PacmanLoader loading={loading || loading2}/>
                    <PropagateLoader loading={loading || loading2}/>
                    <PulseLoader loading={loading || loading2}/>
                    <RingLoader loading={loading || loading2}/>
                    <RiseLoader loading={loading || loading2}/>
                    <RotateLoader loading={loading || loading2}/>
                    <ScaleLoader loading={loading || loading2}/>
                    <SyncLoader loading={loading || loading2}/>
                     */}
            </Modal>
        </div>
    );
}

const SpinnerDemo = React.memo(FSpinner);

export default SpinnerDemo;
