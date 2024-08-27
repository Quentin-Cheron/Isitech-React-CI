import {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEvent,
} from "react";

type IProps = {
  name: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const Input: FC<IProps> = ({
  name,
  type,
  label,
  value,
  placeholder,
  onChange,
  onKeyUp,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 items-end">
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            onChange={onChange}
            onKeyUp={onKeyUp}
            id={name}
            value={value}
            name={name}
            type={type || "text"}
            placeholder={placeholder || "johndoe@example.com"}
            className="pl-2 outline-none block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
