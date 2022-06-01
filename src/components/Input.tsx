import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../context";
import "../styles/app.scss";

interface Props {
  label: string;
}

export const Input: FC<Props> = ({ label }) => {
  const { amountChanged, amount } = useContext(CurrencyContext);

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regex = /^\d{0,9}(\.\d{1,3})?$/;

    if (Number(value) >= 1000000 || !regex.test(value)) return;

    amountChanged(value);
  };

  return (
    <>
      <label className='conversor-input-label' htmlFor={`${label.toLowerCase()}`}>
        {label}
      </label>
      <input
        value={amount}
        step={0.01}
        name={`${label.toLowerCase()}`}
        min={0.01}
        type='number'
        className='conversor-input'
        onChange={onAmountChange}
      />
    </>
  );
};
