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
  const [apiCurrencies, setApiCurrencies] = useState<string[]>([]);
  const [isLoadingCurrencies, setIsLoadingCurrencies] = useState(false);
  const { firstCurrencySelected } = useContext(CurrencyContext);

  useEffect(() => {
    const newCurrencies = Object.keys(currencies);
    const defaultValue = newCurrencies[0];
    const indexValue = newCurrencies.indexOf(newCurrencies[1]);
    const USDStartValue = [...newCurrencies].slice(indexValue);
    USDStartValue.splice(1, 0, defaultValue);

    USD ? setApiCurrencies(USDStartValue) : setApiCurrencies(newCurrencies);
  }, [currencies]);

  const onSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;

    if (id === "from") {
      return firstCurrencySelected({ base: value });
    }
  };

  useEffect(() => {
    if (apiCurrencies.length > 0) {
      setIsLoadingCurrencies(true);
    }
  }, [apiCurrencies]);

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
            //value={apiCurrencies[0]}
          >
            {isLoadingCurrencies &&
              apiCurrencies.map((currency: string) => {
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
