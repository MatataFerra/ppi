import { FC } from "react";

interface Props {
  label: string;
  swithIcon?: boolean;
}

export const SelectCurrency: FC<Props> = ({ label, swithIcon = false }) => {
  return (
    <>
      <div>
        <label className='selectcurrency-input-label' htmlFor={`${label.toLowerCase()}`}>
          {label}
        </label>
        <div className='selectcurrency-container'>
          <select name={`${label.toLowerCase()}`} id='from' className='selectcurrency'>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
          </select>
          {swithIcon && (
            <img
              className='selectcurrency-icon'
              src={`${import.meta.env.VITE_URL_ASSETS}/switch.svg`}
              width={50}
              height={50}
              alt='Switch Icon'
            />
          )}
        </div>
      </div>
    </>
  );
};
