import React from 'react';
import Translate from 'react-translate-component';

const CheckBox = ({field, type, checked, translateLabel, label}) => {
  return (
    <label className="flycheckbox">
      <div className="flycheckbox-checkbox">
        <input {...field} type={type} checked={checked} />
      </div>
      <div className="flycheckbox-label">
        <Translate content={translateLabel}/>
        {label}
      </div>
    </label>
  );
}

export default CheckBox;