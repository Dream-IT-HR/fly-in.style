import React, {Component} from 'react';

class ButtonToolbar extends Component {
    render() {
        return (
            <div className='fly-button-toolbar'>
                {this.props.children}
            </div>
        );
    }    
}

export default ButtonToolbar;