import { FC } from "react";
import "../styles/app.scss";

interface Props {
  label: string;
}

export const Input: FC<Props> = ({ label }) => {
  return (
    <div>
      <label className='conversor-input-label' htmlFor={`${label.toLowerCase()}`}>
        {label}
      </label>
      <input name={`${label.toLowerCase()}`} type='number' className='conversor-input' />
    </div>
  );
};
