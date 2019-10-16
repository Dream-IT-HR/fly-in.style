import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import React from 'react';

function FLocaleSwitcher() {
  const handleChange = (e) => {
    counterpart.setLocale(e.target.value);
  }

  return (
    <div className="flylocale-switcher">
        <span>Switch Locale:</span>
        <select defaultValue={counterpart.getLocale()} onChange={handleChange}>
          <option>en</option>
          <option>hr</option>
        </select>
        <Translate content='homepage.title'/>
    </div>
  );
}

const LocaleSwitcher = React.memo(FLocaleSwitcher);

export default LocaleSwitcher;
