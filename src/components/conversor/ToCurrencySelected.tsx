import { FC } from "react";
import "../../styles/app.scss";

interface Props {
  amount: number;
  name: string;
}

export const ToCurrencySelected: FC<Props> = ({ amount, name }) => {
  return (
    <>
      <p className='conversor-font--2'>{`${amount?.toFixed(4)} ${name}`}</p>
    </>
  );
};
