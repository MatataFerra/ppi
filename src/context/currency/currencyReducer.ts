import { CurrencyState } from ".";
import { ICurrencies, ICurrencyRate, IRate } from "../../interfaces";

type CurrencyActionType =
  | { type: "[Currency] - Get Currencies"; payload: ICurrencies }
  | { type: "[Currency] - Currency Selected - 1"; payload: ICurrencyRate }
  | { type: "[Currency] - Currency Selected - 2"; payload: ICurrencyRate }
  | { type: "[Currency] - Get Rates"; payload: IRate }
  | { type: "[Currency] - Get Rates Currency 2"; payload: IRate }
  | { type: "[Currency] - Amount Changed"; payload: string }
  | { type: "[Currency] - Currency is switching"; payload: boolean };

export const currencyReducer = (state: CurrencyState, action: CurrencyActionType): CurrencyState => {
  switch (action.type) {
    case "[Currency] - Get Currencies":
      return {
        ...state,
        currencies: {
          ...action.payload,
        },
      };

    case "[Currency] - Currency Selected - 1":
      return {
        ...state,
        currency_1: {
          ...action.payload,
        },
      };

    case "[Currency] - Currency Selected - 2":
      return {
        ...state,
        currency_2: {
          ...action.payload,
        },
      };

    case "[Currency] - Get Rates":
      return {
        ...state,
        rates: {
          ...action.payload,
        },
      };

    case "[Currency] - Get Rates Currency 2":
      return {
        ...state,
        ratesCurrency_2: {
          ...action.payload,
        },
      };

    case "[Currency] - Amount Changed":
      return {
        ...state,
        amount: action.payload,
      };

    case "[Currency] - Currency is switching":
      return {
        ...state,
        isSwitching: action.payload,
      };

    default:
      return state;
  }
};
