import PropTypes from 'prop-types';
import React from 'react';

export const ButtonVariants = {
    primary:'primary',
    secondary:'secondary',
    dark:'dark',
    disabled:'disabled'
};

export const ButtonSizes = {
    normal:'normal',
    small:'small',
    large:'large'
};

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
                (variant === ButtonVariants.secondary ? " flybutton__variant--secondary": "") + 
                (variant === ButtonVariants.disabled ? " flybutton__variant--disabled": "") 
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

Button.propTypes = {
    variant: PropTypes.oneOf([ButtonVariants.disabled, ButtonVariants.secondary, ButtonVariants.primary]).isRequired,
    size: PropTypes.oneOf([ButtonSizes.large, ButtonSizes.normal, ButtonSizes.small]).isRequired,
};