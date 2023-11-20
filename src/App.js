import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TranscationList from "./components/TranscationList";
import AddTranscation from "./components/AddTranscation";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationList/>
        <AddTranscation/>
      </div>
      </GlobalProvider>
  );
}

export default App;
