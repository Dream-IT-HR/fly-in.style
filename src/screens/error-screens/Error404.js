import React, { Component } from 'react';
import ErrorNotification from './ErrorNotification';
import ErrorFooter from "./ErrorFooter";
import Translate from 'react-translate-component';

// SVG's
import SVGInline from 'react-svg-inline';
import Image404 from '../../_images/404.svg';

class Error404 extends Component {
  render() {
    return (
      <div className="container">
        <div className="error">
          <h1><Translate content={'error.error404'} /></h1>
          <div className="error__img">
              <SVGInline svg={Image404}/>
          </div>
         <ErrorNotification/>
         <ErrorFooter/>
        </div>
      </div>
    );
  }
}

export default Error404;