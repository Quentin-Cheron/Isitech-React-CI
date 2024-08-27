import { FC } from "react";

type IProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox: FC<IProps> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};
