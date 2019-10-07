import React from 'react';
import { Field } from 'formik';
import Translate from 'react-translate-component';

const FCheckbox  = (props) => {
    let {translateContent} = props;
    return (
        <div className="flycheckbox">
            <div>
                <Field {...props} render={({field}) => {
                    return (
                        <input {...field} type="checkbox" checked={field.value}/>
                    );
                }}/>
            </div>
            <div className="flycheckbox-label">
                <Translate content={translateContent}/>
            </div>
        </div>
    );
};

const Checkbox = React.memo(FCheckbox);

export default Checkbox;