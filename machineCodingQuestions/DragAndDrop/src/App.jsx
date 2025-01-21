import { useState , useRef ,useEffect} from 'react';
export default function App() {
    const [value ,setValue] = useState('');
    const [content , setContent] = useState([]);
    const [currentItem , setCurrentItem] = useState(-1);
    const [eleValue,setEleValue]= useState('')
    const contentRef = useRef(null);


    const handleClick = (val)=>{
        setValue(val);
    }

    const onSubmit= ()=>{
       setContent((prev)=>[...prev,value]);
       setValue('');
    }

    const handleDragStart=(e,index)=>{
        setCurrentItem(index);
        setEleValue(e.target.textContent);//not required using index itself we can get what value is presen in content array
    }
    const handleDrop=(e,index)=>{
        const curr = [...content];
        curr[currentItem] = e.target.textContent;
        curr[index]=eleValue;
        setContent((prev)=>[...curr]);
        setCurrentItem(null);        
    }
    const  handleDragOver = (e)=>{
        e.preventDefault();
    }

    const checkOnDrop=(e)=>{
        console.log("CJECK",e);
    }

    const keydown= (e)=>{
        console.log(e)
    }

    const mouseLeave = (e)=>{
        console.log(currentItem)
    }
  return (
      <div className="wrapper"  onMouseLeave={(e)=>mouseLeave(e)}>
          <div className="input">
              <input type="text" value={value} onChange={(e)=>handleClick(e.target.value)}/>
              <button type="button" onClick={onSubmit}>Submit</button>
          </div>
             <div className="content" ref={contentRef} >
                 {
                     content?.map((data,index)=>(
                         <div key={index} 
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)} // Start dragging
                            onDragOver={(e)=>handleDragOver(e)} // Allow dropping
                            onDrop={(e) => handleDrop(e, index)} // Handle drop
                             >{data}</div>
                     ))
                 }
              </div>
      </div>
  )
}


// Second <input>:


// <input type="text" onChange={handleClick()} />
// Here, the issue lies. You're calling handleClick() immediately when the component renders, not when the event occurs. This will invoke handleClick during the rendering phase and will likely cause it to be called again on the next re-render, resulting in an infinite loop that causes the "Maximum call stack exceeded" error.

// Why does this cause the error?
// The second input element calls handleClick() immediately during the render, not inside an event handler.
// This causes handleClick to run as soon as the component renders, and depending on what handleClick does (for example, if it triggers a state update), it causes the component to re-render, which leads to handleClick() being called again, triggering a loop of re-renders, causing the stack to overflow.
// How to fix it?
// You should only pass a reference to the function without invoking it immediately, like you did with the first input:


// <input type="text" onChange={(e) => handleClick(e.target.value)} />
// <input type="text" onChange={handleClick} />
// This way, handleClick will be invoked when the onChange event is triggered, not immediately during the render.

// Summary:
// Bad Code: onChange={handleClick()} causes immediate execution of handleClick, potentially leading to infinite re-renders.
// Good Code: onChange={handleClick} properly passes the function as a reference to be invoked when the event occurs.


//        container.appendChild(newDiv);
//Used in normal JS
