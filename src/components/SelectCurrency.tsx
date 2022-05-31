import { CSSProperties, FC, useContext, useEffect, useMemo, useState } from "react";
import { CurrencyLabelType, ICurrencies } from "../interfaces";
import { CurrencyContext } from "../context/currency/CurrencyContext";

interface Props {
  label: CurrencyLabelType;
  swithIcon?: boolean;
  currencies: ICurrencies;
  style?: CSSProperties;
  USD?: boolean;
}

export const SelectCurrency: FC<Props> = ({ label, swithIcon = false, currencies, style, USD = false }) => {
  const [isLoadingCurrencies, setIsLoadingCurrencies] = useState(false);
  const { firstCurrencySelected, secondCurrencySelected, currency_1, currency_2 } = useContext(CurrencyContext);

  const index = useMemo(() => {
    if (!currencies) return;
    if (USD) {
      return Object.keys(currencies).indexOf(currency_2.base);
    }
    return Object.keys(currencies).indexOf(currency_1.base);
  }, [currencies, currency_1, currency_2]);

  const currenciesMemo = useMemo(() => {
    if (!currencies) return;
    return Object.keys(currencies);
  }, [currencies]);

  const onSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;
    if (id === "from") {
      return firstCurrencySelected({ base: value });
    }

    return secondCurrencySelected({ base: value });
  };

  useEffect(() => {
    if (currenciesMemo) {
      setIsLoadingCurrencies(true);
    }
  }, [currenciesMemo]);

  return (
    <>
      <div style={style}>
        <label className='selectcurrency-input-label' htmlFor={`${label.toLowerCase()}`}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
        <div className='selectcurrency-container'>
          <select
            name={`${label.toLowerCase()}`}
            id={`${label.toLowerCase()}`}
            className='selectcurrency'
            onChange={onSelectOption}
            value={currenciesMemo![index ?? 0]}>
            {isLoadingCurrencies &&
              currenciesMemo?.map((currency: string) => {
                return (
                  <option key={currency + Math.random()} value={currency}>
                    {currency}
                  </option>
                );
              })}
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
