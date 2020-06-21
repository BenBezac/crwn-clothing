import React, { FC, InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: Function;
    label: string;
}

const FormInput: FC<FormInputProps> = ({
    handleChange,
    label,
    value,
    ...otherProps
}) => {
    // alert(value);
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={(event) => handleChange(event)}
                {...otherProps}
            />
            {label ? (
                <label className={`${value ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;
