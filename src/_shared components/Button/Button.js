import React, {Component} from 'react';
import ButtonSizes from './ButtonSizes';
import ButtonVariants from './ButtonVariants';

class Button extends Component {
    render() {
        let {size, variant, disabled, autoFocus, name, type} = this.props;

        let ret = 
                <button
                    className={"flybutton" + 
                        (size === ButtonSizes.large ? " flybutton__size--large": "") + 
                        (size === ButtonSizes.small ? " flybutton__size--small" : "") +
                        (variant === ButtonVariants.primary ? " flybutton__variant--primary": "") +
                        (variant === ButtonVariants.secondary ? " flybutton__variant--secondary": "")}

                    name={name}
                    autoFocus={autoFocus}
                    type={type}
                    disabled={disabled}
                    onClick={this.props.onClick}
                    >
                    {this.props.children}
                </button>;

        return (ret);
    }    
}

export default Button;
