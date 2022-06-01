import { FC, useEffect, useReducer } from "react";
import { Children, ICurrencies, ICurrencyRate, IRate } from "../../interfaces";
import { CurrencyContext, currencyReducer } from ".";
import { getCurrencies, getRates } from "../../api";

export interface CurrencyState {
  currencies: ICurrencies;
  currency_1: ICurrencyRate;
  currency_2: ICurrencyRate;
  rates: IRate;
  ratesCurrency_2: IRate;
  amount: string;
  isSwitching: boolean;
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

  ratesCurrency_2: {
    date: "",
    base: "",
    rates: {},
  },

  amount: "1.00",

  isSwitching: false,
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
      try {
        const [dataCurrency1, dataCurrency2] = await Promise.all([
          getRates(state.currency_1.base),
          getRates(state.currency_2.base),
        ]);

        if (dataCurrency1.rates[state.currency_1.base] && dataCurrency2.rates[state.currency_2.base]) {
          dispatch({ type: "[Currency] - Get Rates", payload: dataCurrency1 });
          dispatch({ type: "[Currency] - Get Rates Currency 2", payload: dataCurrency2 });
        }
      } catch (error: any) {
        console.log(error);
        console.log("An error occurred while fetching rates");
      }
    };

    getRateFromApi();
  }, [state.currency_1.base, state.currency_2.base]);

  const firstCurrencySelected = (currency: ICurrencyRate) => {
    dispatch({ type: "[Currency] - Currency Selected - 1", payload: currency });
  };

  const secondCurrencySelected = (currency: ICurrencyRate) => {
    dispatch({ type: "[Currency] - Currency Selected - 2", payload: currency });
  };

  const amountChanged = (amount: string) => {
    dispatch({ type: "[Currency] - Amount Changed", payload: amount });
  };

  const switchCurrencies = (value: boolean) => {
    dispatch({ type: "[Currency] - Currency is switching", payload: value });
  };

  return (
    <CurrencyContext.Provider
      value={{
        ...state,
        firstCurrencySelected,
        secondCurrencySelected,
        amountChanged,
        switchCurrencies,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};
