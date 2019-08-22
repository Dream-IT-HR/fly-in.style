import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import './styles.scss';
import AppWrapper from './AppWrapper';

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <AppWrapper/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
//export default withRouter(App);
