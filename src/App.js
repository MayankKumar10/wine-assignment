import './App.css';
import WineStatisticsTable from './components/WineStaticsTable';
import { wineData } from './data';

function App() {
  const AllWineData = wineData

  return (
    <div className="App">
      <h4>Wine Assignment</h4>
      <WineStatisticsTable data={AllWineData} property="Flavanoids" />
      <WineStatisticsTable data={AllWineData} property="Gamma" />

    </div>
  );
}

export default App;
