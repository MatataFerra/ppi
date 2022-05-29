import { FC } from "react";
import { Input, SelectCurrency } from ".";
import "../styles/app.scss";

export const Conversor: FC = () => {
  return (
    <section className='conversor'>
      <div className='conversor-container'>
        <div className='conversor-input-container'>
          <Input label='amount' />
          <SelectCurrency label={"From"} swithIcon />
          <SelectCurrency label={"To"} />
        </div>
        <div className='conversor-info'>
          <div>
            <p className='conversor-font--1'>1 Euro =</p>
            <p className='conversor-font--2'>1.3550 Canadian Dollar</p>
          </div>
          <div>
            <p className='conversor-font--3'>1 CA$ = 0.7379 EUR</p>
            <p className='conversor-font--3'>1 EUR = 1.3550 CA$</p>
          </div>
          <div className='conversor-warning'>
            <img src={`${import.meta.env.VITE_URL_ASSETS}/warning.svg`} alt='' />
            <p>We use the market rate. This is for informational purposes only.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
