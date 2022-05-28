import { FC } from "react";

interface Props {
  label: string;
}

export const SelectCurrency: FC<Props> = ({ label }) => {
  return (
    <>
      <div>
        <label className='conversor-input-label' htmlFor={`${label.toLowerCase()}`}>
          {label}
        </label>
        <select name={`${label.toLowerCase()}`} id='from' className='conversor-select'>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
        </select>
      </div>
    </>
  );
};
