import Header from './components/Header/Header';
import './App.css';
import Explore from './components/Explore/Explore';
import Shop from './components/Shop/Shop';
import storeData from './data';
import { useState } from 'react';

function App() {
  const [filteredData, setFilteredData] = useState(storeData);

  return (
    <div>
      <Header />
      <div className='layout'>
        <Explore data={storeData} setFilteredData={setFilteredData} />
        <Shop data={storeData} filteredData={filteredData} />
      </div>
    </div>
  );
}

export default App;
