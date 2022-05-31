export interface ICurrencies {
  [key: string]: ICurrency;
}

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ICurrencyRate {
  base: string;
}

export interface IRate {
  date: string;
  base: string;
  rates: { [key: string]: number };
}

export type CurrencyLabelType = "from" | "to";
