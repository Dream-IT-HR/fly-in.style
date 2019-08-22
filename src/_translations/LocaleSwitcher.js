import counterpart from 'counterpart';
import React, {Component} from 'react';

class LocaleSwitcher extends Component {
    handleChange(e) {
        counterpart.setLocale(e.target.value);
    }
    render() {
      return (
        <p>
          <span>Switch Locale:</span>
   
          <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
            <option>en</option>
            <option>hr</option>
          </select>
        </p>
      );
    }
  }

  export default LocaleSwitcher;