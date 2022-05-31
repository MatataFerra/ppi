import { FC, useContext, useEffect, useState } from "react";
import { Input, SelectCurrency } from ".";
import { CurrencyContext } from "../context";
import "../styles/app.scss";
import { Skeletton } from "./ui";

export const Conversor: FC = () => {
  const { currencies, rates, currency_2 } = useContext(CurrencyContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (rates.base) {
      setIsLoading(false);
    }
  }, [rates.base]);

  return (
    <section className='conversor'>
      <div className='conversor-container'>
        <div className='conversor-input-container'>
          <Input label='amount' />
          <SelectCurrency label={"from"} swithIcon currencies={currencies} style={{ margin: ".5rem 0" }} />
          <SelectCurrency USD label={"to"} currencies={currencies} />
        </div>
        <div className='conversor-info'>
          {isLoading ? (
            <Skeletton height='38' />
          ) : (
            <div>
              <p className='conversor-font--1'>{`1 ${currencies[rates.base].name} =`}</p>
            </div>
          )}
          <p className='conversor-font--2'>1.3550 Canadian Dollar</p>

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
