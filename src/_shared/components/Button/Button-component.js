import PropTypes from 'prop-types';
import React from 'react';

export const ButtonVariants = {
    primary:'primary',
    secondary:'secondary',
    dark:'dark',
    disabled:'disabled',
    basic: 'basic',
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

const Button = React.memo(props => {
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
                (variant === ButtonVariants.disabled ? " flybutton__variant--disabled": "") +
                (variant === ButtonVariants.basic ? " flybutton__variant--basic": "") 
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
});

export default Button;

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(ButtonSizes)).isRequired,
    variant: PropTypes.oneOf(Object.keys(ButtonVariants)).isRequired,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    linkPath: PropTypes.string,
};
