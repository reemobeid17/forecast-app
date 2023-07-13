import { ChangeEvent } from "react";

import { Option } from "../../utils/types";

interface DropdownProps {
  name: string;
  options: Option[];
  value?: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  icon?: string;
  alt?: string;
}

const DropdownField = ({
  name,
  options,
  value,
  onChange,
  icon,
  alt,
}: DropdownProps) => {
  return (
    <div className="flex items-center">
      {icon && <img src={icon} alt={alt || ""} className="h-6 w-6 mr-1" />}
      <select
        className="outline-none w-full"
        name={name}
        defaultValue={value}
        onChange={onChange}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
