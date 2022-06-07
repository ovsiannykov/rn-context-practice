import React, {useState} from 'react';

import counterContext from './context/counterContext';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <counterContext.Provider value={{counter, setCounter}}>
      <HomeScreen increment={increment} decrement={decrement} />
    </counterContext.Provider>
  );
};

export default App;
