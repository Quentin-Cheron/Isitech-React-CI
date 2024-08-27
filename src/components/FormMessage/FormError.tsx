import { FC } from "react";

type IProps = {
  message: string;
  isSuccess: boolean;
};

export const FormError: FC<IProps> = ({ message, isSuccess }) => {
  if (isSuccess) return null;
  return <p className="mt-2 text-sm text-red-600 w-1/2">{message}</p>;
};
