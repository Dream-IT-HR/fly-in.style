import React, {Component} from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class FlyButtonToolbar extends Component {
    render() {
        return (
            <div className='fly-button-toolbar'>
                <ButtonToolbar>
                    {this.props.children}
                </ButtonToolbar>
            </div>
        );
    }    
}

export default FlyButtonToolbar;