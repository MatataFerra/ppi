import { FC, useEffect, useReducer } from "react";
import { Children, ICurrencies, ICurrency, ICurrencyRate, IRate } from "../../interfaces";
import { CurrencyContext, currencyReducer } from ".";
import { getCurrencies, getRates } from "../../api";

export interface CurrencyState {
  currencies: ICurrencies;
  currency_1: ICurrencyRate;
  currency_2: ICurrencyRate;
  rates: IRate;
}

const Currency_INITIAL_STATE: CurrencyState = {
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  currency_1: {
    base: "EUR",
  },

  currency_2: {
    base: "USD",
  },

  rates: {
    date: "",
    base: "",
    rates: {},
  },
};

export const CurrencyProvider: FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, Currency_INITIAL_STATE);

  useEffect(() => {
    const getCurrenciesFromApi = async () => {
      const data = await getCurrencies();
      dispatch({ type: "[Currency] - Get Currencies", payload: data });
    };

    getCurrenciesFromApi();
  }, []);

  useEffect(() => {
    const getRateFromApi = async () => {
      const data = await getRates(state.currency_1.base);
      console.log({ data });

      dispatch({ type: "[Currency] - Get Rates", payload: data });
    };

    getRateFromApi();
  }, []);

  const firstCurrencySelected = (currency: ICurrencyRate) => {
    dispatch({ type: "[Currency] - Currency Selected - 1", payload: currency });
  };

  const secondCurrencySelected = (currency: ICurrencyRate) => {
    dispatch({ type: "[Currency] - Currency Selected - 1", payload: currency });
  };

  return (
    <CurrencyContext.Provider
      value={{
        ...state,
        firstCurrencySelected,
        secondCurrencySelected,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};
