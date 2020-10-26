import Header from './components/Header/Header';
import './App.css';
import Explore from './components/Explore/Explore';
import Shop from './components/Shop/Shop';
import storeData from './data';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(storeData);
  const [filteredData, setFilteredData] = useState(storeData);

  return (
    <div>
      <Header />
      <div className='layout'>
        <Explore
          data={data}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
        />
        <Shop data={data} filteredData={filteredData} />
      </div>
    </div>
  );
}

export default App;
