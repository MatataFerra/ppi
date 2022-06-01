import { FC } from "react";
import "../../styles/app.scss";

interface Props {
  amount: string;
  name: string;
}

export const FromCurrencySelected: FC<Props> = ({ amount, name }) => {
  return (
    <div>
      <p className='conversor-font--1'>{`${Number(amount).toFixed(2)} ${name} =`}</p>
    </div>
  );
};
