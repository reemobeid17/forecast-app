import { ChangeEvent } from "react";

interface TextFieldProps {
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  alt?: string;
}

const TextField = ({
  name,
  value,
  placeholder,
  onChange,
  icon,
  alt,
}: TextFieldProps) => {
  return (
    <div className="flex items-center">
      {icon && <img src={icon} alt={alt || ""} className="h-6 w-6 mr-1" />}
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="outline-none w-full"
      />
    </div>
  );
};

export default TextField;
