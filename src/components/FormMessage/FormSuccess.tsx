import { FC } from "react";

type IProps = {
  message: string;
  isSuccess: boolean;
};

export const FormSuccess: FC<IProps> = ({ message, isSuccess }) => {
  if (!isSuccess) return null;
  return <p className="text-sm text-green-600 w-1/2">{message}</p>;
};
