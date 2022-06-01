import { useContext } from "react";
import { Conversor, Title } from "./components";
import { CurrencyContext } from "./context";
import "./styles/app.scss";

function App() {
  const { amount, currencies, currency_1, currency_2 } = useContext(CurrencyContext);

  return (
    <>
      <main className='App'>
        <Title
          title={`Convert ${Number(amount).toFixed(2)} ${currencies[currency_1.base]?.name} to ${
            currencies[currency_2.base]?.name
          } - ${currency_1.base} to ${currency_2.base}`}
        />
        <Conversor />
      </main>
    </>
  );
}

export default App;
