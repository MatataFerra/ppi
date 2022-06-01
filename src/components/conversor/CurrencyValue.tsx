import { FC } from "react";
import "../../styles/app.scss";

interface Props {
  value: string;
}

export const CurrencyValue: FC<Props> = ({ value }) => {
  return <p className='conversor-font--3'>{`${value}`}</p>;
};
