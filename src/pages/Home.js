import React, { useState, useCallback } from 'react';
import List from './List';


const Home = () => {
  const [concept, setConcepts] = useState({
    concept1: "lifecycle",
    concept2: "states&props",
    concept3: "hooks",
    concept4: "redux"
  });

  const updateConcept = () => {
    setConcepts(previousState => {
      return { ...previousState, concept1: "ES6" }
    })
  }


  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // usecallback return the entire function which
  // can be used later on on the related dependency change

  // sending a prop will re-render component i.e List
  // because of refrential equality recreatin the function to avoid this we use usecallback


  // useMemo on the other hand returns only the value instead of entire function
  //  memoization as caching a value so that it does not need to be recalculated.

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div>
      <h3>Home</h3>
      <div>
        This is the home page.
      </div>
      <button
        type="button"
        onClick={updateConcept}
      >Concepts</button> <br />
      <span>
        {concept.concept1}
      </span>

      <div style={theme}>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Dark</button>
        <List getItems={getItems} />
      </div>
    </div>
  );
}
export default Home;