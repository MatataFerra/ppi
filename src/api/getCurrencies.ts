import { ICurrencies, IRate } from "../interfaces";

export const getCurrencies = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/currencies");
  const data: ICurrencies = await res.json();
  return data;
};

export const getRates = async (base: string) => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/rates?=" + base);
  const data: IRate = await res.json();
  return data;
};
