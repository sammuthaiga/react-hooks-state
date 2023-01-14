import React, {useState} from 'react'

function Counterr() {
    const [count, setCount] =useState(10);

    function decrement() {
        setCount(count - 1);
    }
  return <button onClick={decrement}>I have been reduced to {count} this time</button>;
}

export default Counterr;