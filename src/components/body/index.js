import axios from 'axios';
import Donut from '../donut';
import { useEffect, useState } from 'react';
import './body.scss';

const Body = () => {
    const [donuts, setDonuts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data: { items = []} = {}} = await axios.get('https://frvkdnnuf7.execute-api.us-west-2.amazonaws.com/production')
                if (items.length) {
                    setDonuts(items);
                }
            } catch (err) {
            //TODO: handle error
                console.log(err);
            }
            setIsLoading(prevIsLoading => !prevIsLoading);
        })();
    }, []);

    return (
        <section className="flex-row content space-even">
          {isLoading ? 
            <img className="App-logo" src="assets/loading.png" alt="spinning donut while page loads"></img> :
            donuts.map((donut, idx) => <Donut {...donut} key={idx} idx={idx}/> )
          }
        </section>
    );
};

export default Body;