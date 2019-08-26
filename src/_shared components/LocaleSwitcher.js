import FlyButton from './extended-components/FlyButton';
import FlyButtonToolbar from './extended-components/FlyButtonToolbar';
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
          <FlyButtonToolbar>
            <FlyButton variant='primary' onClick={(e) => this.handleButtonClick(e)}>Primary button</FlyButton>
            <FlyButton variant="secondary">Secondary</FlyButton>
            <FlyButton variant="success">Success</FlyButton>
            <FlyButton variant="warning">Warning</FlyButton>
            <FlyButton variant="danger">Danger</FlyButton>
            <FlyButton variant="info">Info</FlyButton>
            <FlyButton variant="light">Light</FlyButton>
            <FlyButton variant="dark">Dark</FlyButton>
            <FlyButton variant="link">Link</FlyButton>
          </FlyButtonToolbar>
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