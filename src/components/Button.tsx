import { FC, MouseEventHandler } from "react";

type IProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<IProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="h-[40px] rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {text}
    </button>
  );
};
