import './App.css';
import axios from 'axios';
import Donut from './components/donut';
import { useEffect, useState } from 'react';

function App() {

  const [donuts, setDonuts] = useState([]); 
  useEffect(() => {
    const getDonutList = async () => {
      const { data: { items = []} = {}} = await axios.get('https://frvkdnnuf7.execute-api.us-west-2.amazonaws.com/production', {})
      if (items.length) {
        setDonuts(items);
      }
    };
    getDonutList();
  }, []);

  return (
    <div className="App">
      <section>
        <div className="flex-row">
          {donuts.map((donut, idx) => <Donut {...donut} key={idx}/> )}
        </div>
      </section>
    </div>
  );
}

export default App;
