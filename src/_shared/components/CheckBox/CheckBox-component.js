import React from 'react';
import Translate from 'react-translate-component';

const FCheckBox = (props) => {
    let {label, translateLabel, value} = props;
    
    let valueString = "false";
    if (value) valueString = "true";

    return (
        <div className="flycheckbox">
            <div className="flycheckbox-checkbox">
                {/* <input type="checkbox" value={value} {...field}/> */}
                <input type="checkbox" value={valueString}/>
            </div>
            <div className="flycheckbox-label">
                {label && <span>{label}</span>}
                {translateLabel && <Translate content={translateLabel}/>}
            </div>
        </div>
    );
}

const CheckBox = React.memo(FCheckBox);

export default CheckBox;
