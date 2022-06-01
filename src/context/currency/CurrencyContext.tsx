import { createContext } from "react";
import { ICurrencies, ICurrencyRate, IRate } from "../../interfaces";

interface ContextProps {
  currencies: ICurrencies;
  currency_1: ICurrencyRate;
  currency_2: ICurrencyRate;
  rates: IRate;
  ratesCurrency_2: IRate;
  amount: string;
  isSwitching: boolean;
  firstCurrencySelected: (currency: ICurrencyRate) => void;
  secondCurrencySelected: (currency: ICurrencyRate) => void;
  amountChanged: (amount: string) => void;
  switchCurrencies: (value: boolean) => void;
}

export const CurrencyContext = createContext({} as ContextProps);
