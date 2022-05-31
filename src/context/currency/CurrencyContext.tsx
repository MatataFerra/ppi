import { createContext } from "react";
import { ICurrencies, ICurrencyRate, IRate } from "../../interfaces";

interface ContextProps {
  currencies: ICurrencies;
  currency_1: ICurrencyRate;
  currency_2: ICurrencyRate;
  rates: IRate;
  amount: string;
  firstCurrencySelected: (currency: ICurrencyRate) => void;
  secondCurrencySelected: (currency: ICurrencyRate) => void;
  amountChanged: (amount: string) => void;
}

export const CurrencyContext = createContext({} as ContextProps);
