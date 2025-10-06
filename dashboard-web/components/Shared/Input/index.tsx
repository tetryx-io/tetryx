import React, { ChangeEvent, ReactNode } from "react";

interface InputProps {
  disabled?: boolean;
  required?: boolean;
  type: string;
  name: string;
  label?: string;
  value?: string;
  styleClass?: string;
  placeholder?: string;
  autocomplete?: string;
  iconLeft?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  disabled,
  required,
  label,
  type,
  name,
  styleClass,
  placeholder,
  autocomplete,
  iconLeft,
  value,
  onChange,
}) => {
  return (
    <div className="">
      {label && (
        <label
          className="block text-neutral-600 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <div className="relative flex rounded-md bg-neutral-50 text-neutral-600">
        {iconLeft && (
          <div className="absolute left-4 h-full">{iconLeft}</div>
        )}

        <input
          disabled={disabled}
          required={required}
          className={`${styleClass} ${iconLeft && 'pl-12'} border border-neutral-200 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-black w-full py-2 px-3 placeholder-neutral-400 leading-tight`}
          type={type}
          id={name}
          name={name}
          autoComplete={autocomplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
