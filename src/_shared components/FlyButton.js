import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class FlyButton extends Component {
    render() {
        let {variant, active, block, size, type, href, disabled} = this.props;
       
        return (
            <div className='fly-button'>
                <Button
                    variant={variant}
                    active={active}
                    block={block}
                    size={size}
                    type={type}
                    href={href}
                    disabled={disabled}
                    onClick={this.props.onClick}
                    >
                    {this.props.children}
                </Button>
            </div>
        );
    }    
}

export default FlyButton;