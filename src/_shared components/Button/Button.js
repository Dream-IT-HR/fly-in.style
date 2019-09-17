import React from 'react';
import ButtonSizes from './ButtonSizes';
import ButtonVariants from './ButtonVariants';

const onClick = (linkPath) =>
{
    if (linkPath) {
        window.location = linkPath;
    }
}

function fButton(props)  {
        let {id, className, size, variant, disabled, autoFocus, name, type, linkPath} = props;

        let handleClick = () => { onClick(linkPath); };

        if(props.onClick)
        {
            handleClick = () => { props.onClick(); };
        }

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
                onClick={handleClick}
                >
                {props.children}
            </button>
        );
    }    

const Button = React.memo(fButton);

export default Button;
