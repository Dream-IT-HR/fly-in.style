import React from 'react';
import Translate from 'react-translate-component';

const CheckBox = ({field, form, type, checked, translateLabel, label}) => {
  let {isValid} = form;

  let className = "flycheckbox";

  if (isValid) {
      className += " flycheckbox__formvalid"
  }

  return (
    <label className={className}>
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