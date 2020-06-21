import React, { ButtonHTMLAttributes, FC } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isGoogleSignIn?: boolean;
    inverted?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
    children,
    isGoogleSignIn = false,
    inverted = false,
    ...otherProps
}) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''}${
                isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
