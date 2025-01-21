import { useState } from 'react';

export  function App() {
const [activeIndex, setActiveIndex] = useState ([]);
  const handleClick = ()=>{
     if(activeIndex.length<=4){
      setActiveIndex((prev)=>[
          ...prev,
          prev.length > 0 ? prev[prev.length-1]+1 : 0
      ])      
      console.log(activeIndex);
     }
  }
  return (
    <div className="wrapper">
      <div className="stepper">
        {
          [...Array(4)].map((_, id) => (
            <div key={id}
              className={`${activeIndex.includes(id) ? 'green' : ''} ${activeIndex[activeIndex.length - 1] + 1 === id || id===0  ? 'blue' : ''}`}
              //instead we can use id === activeIndex ? 'blue' : id <= activeIndex ? 'green':''; where activeIndex is just a number initialised with 0 not an array so on loop 0==0 true so it will have blue , others gray then when on handleClick activeIndex is 0+1 = 1 so 0==0 false then goes to ternary condition which checks if id(0) <= activeIndex(1) true so green
                >{id+1}</div>
          ))
        }
      </div>
      <div className="button" onClick={handleClick}>Next</div>
    </div>
  )
}

