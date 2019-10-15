import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import React, {Component} from 'react';

class LocaleSwitcher extends Component {
    handleChange(e) {
        counterpart.setLocale(e.target.value);
    }

    handleButtonClick(e) {
      alert('primary button clicked 3');
    }

    render() {
      return (
        <div>
            <span>Switch Locale:</span>
            <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
              <option>en</option>
              <option>hr</option>
            </select>
            <Translate content='homepage.title'/>
        </div>
      )
    }
  }

  export default LocaleSwitcher;