import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Input, SelectCurrency } from ".";
import { getRates } from "../api";
import { CurrencyContext } from "../context";
import "../styles/app.scss";
import { CurrencyValue, FromCurrencySelected, ToCurrencySelected } from "./conversor";
import { Skeletton } from "./ui";

export const Conversor: FC = () => {
  const { currencies, rates, currency_2, currency_1, amount, isSwitching, switchCurrencies, ratesCurrency_2 } =
    useContext(CurrencyContext);
  const [cotization, setCotization] = useState("");
  const [cotizationLoading, setCotizationLoading] = useState(false);

  useEffect(() => {
    if (rates.base) {
      switchCurrencies(true);
    }
  }, [rates.base]);

  useEffect(() => {
    const differenceBetweenCurrencies = async () => {
      const data = await getRates(currency_2.base);

      if (!!data.rates[rates.base]) {
        setCotization(data.rates[rates.base]?.toFixed(4).toString());
        return;
      }

      setCotization("0000");
    };

    differenceBetweenCurrencies();
  }, [currency_2.base, rates.base]);

  const memoAmount = useMemo(() => {
    return rates.rates[currency_2.base] * Number(amount);
  }, [amount, rates.rates, currency_2.base]);

  return (
    <section className='conversor'>
      <div className='conversor-container'>
        <div className='conversor-input-container'>
          <Input label='amount' />
          <SelectCurrency label={"from"} switchIcon currencies={currencies} style={{ margin: ".5rem 0" }} />
          <SelectCurrency USD label={"to"} currencies={currencies} />
        </div>
        <div className='conversor-info'>
          <Skeletton height='38' isLoading={isSwitching}>
            <FromCurrencySelected amount={amount} name={currencies[rates.base]?.name} />
          </Skeletton>

          <Skeletton height='42' width='300' isLoading={isSwitching}>
            <ToCurrencySelected amount={memoAmount} name={currencies[currency_2.base]?.name} />
          </Skeletton>

          <div>
            <Skeletton height='20' width='150' isLoading={isSwitching}>
              <CurrencyValue
                value={`1 ${currency_2.base} = ${ratesCurrency_2.rates[currency_1.base]?.toFixed(4)} ${rates.base}`}
              />
            </Skeletton>

            <Skeletton height='20' width='150' isLoading={isSwitching}>
              <CurrencyValue
                value={`1 ${rates.base} = ${rates.rates[currency_2.base]?.toFixed(4)} ${currency_2.base}`}
              />
            </Skeletton>
          </div>
          <div className='conversor-warning'>
            <img src={`/warning.svg`} alt='' />
            <p>We use the market rate. This is for informational purposes only.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
