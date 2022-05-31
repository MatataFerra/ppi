import { ChangeEvent, FC, useEffect, useState } from "react";
import "../styles/app.scss";

interface Props {
  label: string;
}

const parseNum = (num: number) => {
  return num.toFixed(2);
};

export const Input: FC<Props> = ({ label }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(parseNum(1));
  }, []);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label className='conversor-input-label' htmlFor={`${label.toLowerCase()}`}>
        {label}
      </label>
      <input
        value={value}
        step={0.01}
        name={`${label.toLowerCase()}`}
        min={0.01}
        type='number'
        className='conversor-input'
        onClick={() => setValue("")}
        onChange={handleAmountChange}
      />
    </div>
  );
};
