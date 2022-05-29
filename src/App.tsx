import { Conversor, Title } from "./components";
import "./styles/app.scss";

function App() {
  const urlApi = import.meta.env.VITE_API_URL;

  return (
    <>
      <main className='App'>
        <Title title='Convert 1 Euro to Canadian Dollar - EUR to CA$' />
        <Conversor />
      </main>
    </>
  );
}

export default App;
