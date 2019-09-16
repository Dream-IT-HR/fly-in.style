import React from 'react';
import ButtonSizes from './ButtonSizes';
import ButtonVariants from './ButtonVariants';

function fButton(props)  {
        let {id, className, size, variant, disabled, autoFocus, name, type} = props;

        return (
            <button
                id={(id ? id: "")}
                className={
                    (className ? className + " ": "") +
                    "flybutton" + 
                    (size === ButtonSizes.large ? " flybutton__size--large": "") + 
                    (size === ButtonSizes.small ? " flybutton__size--small" : "") +
                    (variant === ButtonVariants.primary ? " flybutton__variant--primary": "") +
                    (variant === ButtonVariants.dark ? " flybutton__variant--dark": "") +
                    (variant === ButtonVariants.secondary ? " flybutton__variant--secondary": "")
                    }

                name={name}
                autoFocus={autoFocus}
                type={type}
                disabled={disabled}
                onClick={props.onClick}
                >
                {props.children}
            </button>
        );
    }    

const Button = React.memo(fButton);

export default Button;
