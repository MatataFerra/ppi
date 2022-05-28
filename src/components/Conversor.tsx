import { FC } from "react";
import { Input, SelectCurrency } from ".";
import "../styles/app.scss";

export const Conversor: FC = () => {
  return (
    <div className='conversor-container'>
      <div>
        <Input label='amount' />
        <SelectCurrency label={"From"} />
        <SelectCurrency label={"To"} />
      </div>
    </div>
  );
};
