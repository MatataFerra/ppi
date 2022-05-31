import { FC, useContext, useEffect, useState } from "react";
import { Input, SelectCurrency } from ".";
import { getRates } from "../api";
import { CurrencyContext } from "../context";
import "../styles/app.scss";
import { Skeletton } from "./ui";

export const Conversor: FC = () => {
  const { currencies, rates, currency_2 } = useContext(CurrencyContext);
  const [cotization, setCotization] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (rates.base) {
      setIsLoading(false);
    }
  }, [rates.base]);

  useEffect(() => {
    const differenceBetweenCurrencies = async () => {
      const data = await getRates(currency_2.base);
      setCotization(data.rates[rates.base].toFixed(4).toString());
    };

    differenceBetweenCurrencies();
  }, [currency_2.base, rates.base]);

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
              <p className='conversor-font--1'>{`1 ${currencies[rates.base]?.name} =`}</p>
            </div>
          )}
          <p className='conversor-font--2'>{`${rates.rates[currency_2.base]?.toFixed(4)} ${
            currencies[currency_2.base]?.name
          }`}</p>

          <div>
            <p className='conversor-font--3'>{`1 ${currency_2.base} = ${cotization} ${rates.base}`}</p>
            <p className='conversor-font--3'>{`1 ${rates.base} = ${rates.rates[currency_2.base]?.toFixed(4)} ${
              currency_2.base
            }`}</p>
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
