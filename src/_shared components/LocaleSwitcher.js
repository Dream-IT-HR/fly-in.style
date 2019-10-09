import Button from './Button/Button';
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
          <div>
            <Button variant='primary' onClick={(e) => this.handleButtonClick(e)}>Primary button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </div>
          <p>
            <span>Switch Locale:</span>
            <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
              <option>en</option>
              <option>hr</option>
            </select>
          </p>
        </div>
      )
    }
  }

  export default LocaleSwitcher;