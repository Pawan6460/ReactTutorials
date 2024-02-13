import React, { useState, useEffect, useReducer } from 'react';


const initialData = {
    lowercase: '',
    uppercase: '',
    spaces: ''
  }

  
const reducer = (state, action) => {
    switch (action.type) {
      case 'LOWERCASE':
        return {...state, [action.payload.name]: action.payload.value.toLowerCase()}
      case 'UPPERCASE':
        return {...state, [action.payload.name]: action.payload.value.toUpperCase()}
      case 'SPACES':
        return {...state, [action.payload.name]: action.payload.value.replaceAll(' ', '')}
      default:
        return state;
    }
  };

const AdvConcepts = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
    const [redData, dispatch] = useReducer(reducer, initialData);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);


    // use effect perform side effects
    // useEffect accepts two arguments. The second argument is optional. ie function and dependency
    // [] empty dependncy perferms use effect only on initial render

    //Some effects require cleanup to reduce memory leaks.
    //Timeouts, subscriptions, event listeners, and other effects that are
    //no longer needed should be disposed.
    //We do this by including a return function at the end of the useEffect Hook.

    const handleChange = (e) => {
        setData(e.target.value)
    }

    const handleRedChange = (e) => {
        dispatch({ type: e.target.name.toUpperCase(), payload: {name: e.target.name, value: e.target.value} });
      };

    return (<>
        <input onChange={handleChange} value={data} />
        <h1>I have rendered {count} times!</h1>

        <form>
        <input type="text" placeholder="Only Lowercase" name="lowercase" onChange={handleRedChange} value={redData.lowercase} /><br />
        <input type="text" placeholder="Only Uppercase" name="uppercase" onChange={handleRedChange} value={redData.uppercase} /><br />
        <input type="text" placeholder="No Spaces" name="spaces" onChange={handleRedChange} value={redData.spaces} />
      </form>
    </>)
};

export default AdvConcepts