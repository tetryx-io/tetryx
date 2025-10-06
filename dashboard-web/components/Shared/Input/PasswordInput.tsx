import React, { ChangeEvent, ReactNode, useState } from "react";
import Input from "../Input";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri"; // Update the path based on your project structure

interface PasswordInputProps {
  disabled?: boolean;
  required?: boolean;
  name: string;
  label?: string;
  value?: string,
  type: string,
  styleClass?: string;
  placeholder?: string;
  autocomplete?: string;
  iconLeft?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  disabled,
  required,
  label,
  name,
  value,
  styleClass,
  placeholder,
  autocomplete,
  iconLeft,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="relative">
        <Input
          disabled={disabled}
          required={required}
          label={label}
          type={showPassword ? "text" : "password"}
          name={name}
          styleClass={`${styleClass} pr-10`}
          placeholder={placeholder}
          iconLeft={iconLeft}
          value={value}
          autocomplete="new-password"
          onChange={onChange}
        />
        <button
          type="button"
          className="absolute bottom-[10px] right-0 pr-3 flex items-center cursor-pointer text-neutral-500 focus:outline-none"
          onClick={handleToggle}
        >
          {showPassword ? <RiEyeCloseLine size={18}/> : <RiEyeLine size={18}/>}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
