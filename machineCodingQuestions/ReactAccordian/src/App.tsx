import React , {useState} from 'react';
import {data} from './faq';
import {Accordian} from './Accordian';

export default function App() {
    const [activeIndex , setActiveIndex] = useState(0);
     const handleClick = (index)=>{
         if(index==activeIndex){setActiveIndex(null); return;}
         setActiveIndex(index);
    }
  return (
    <div className='App'>
      <div className='wrapper'>
      {
        data.map((data,i)=>(
                      <div className="accordian" onClick={()=>handleClick(i)} >               
              <div className="questions" >
                  {data.faqName}
                <span className={activeIndex==i ? 'upArrow':'downArrow'}></span>
             </div>
                {  (activeIndex == i) && <div className="description">{data.faqDescription} </div>}
        </div>
        ))
      }
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');
