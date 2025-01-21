 import {useState} from 'react';
export default App = () =>{
    const [selected , setSelected] = useState([]);
    const onStarClick = (id) =>{
        let stars = document.querySelectorAll(".star");
        let currSelected = selected;
        stars.forEach((star,index)=>{
            if(index<=id  &&  star.style.backgroundColor!="yellow" )
            {
                star.style.backgroundColor= "yellow";
                currSelected = [...currSelected,index];
                setSelected(currSelected);
          }else if(index==id){
                star.style.backgroundColor= "gray";
                currSelected = currSelected.reduce((acc,curr)=>{
                    return curr != id ? [...acc,curr] : acc;               
                },[])
                setSelected(currSelected);
            }else if(currSelected.includes(id+1) && index > id && star.style.backgroundColor=="yellow") {           
                        star.style.backgroundColor= "gray";
          
            }
            
    });
    }
     return(
    <div className="wrapper">
        {
           [...Array(5)].map((_,id)=>(
               <div className="star"  onClick={()=>onStarClick(id)}>a</div>
           ))
        }
    </div>
         )
}




//OPTIMISED CODE



//const onStarClick = (id) => {
//    let stars = document.querySelectorAll(".star");
//    let currSelected = [...selected];  // Make a copy of the selected array to avoid directly mutating the state
    
//    stars.forEach((star, index) => {
        // If the star is being selected
//        if (index <= id && star.style.backgroundColor !== "yellow") {
//            star.style.backgroundColor = "yellow";
//            currSelected.push(index);
//        } 
        // If the star is being deselected
//        else if (index === id && star.style.backgroundColor === "yellow") {
//            star.style.backgroundColor = "gray";
//           currSelected = currSelected.filter(item => item !== id);  // Remove the clicked index from selected
//        }
        // If a star after the clicked one is selected, reset those stars
//        else if (index > id && currSelected.includes(id + 1) && stars[id + 1].style.backgroundColor === "yellow") {
//            star.style.backgroundColor = "gray";  // Set remaining stars to gray after deselection
//        }
//    });

















    
//    setSelected(currSelected);  // Update the state only once after processing
//};



import {useState} from 'react';
export default StarRating = () =>{
    const [selected , setSelected] = useState([]);
    const onStarClick = (id) =>{
        let currSelected = [...selected];
        if(currSelected.includes(id))
        {
            currSelected = currSelected.filter((value)=>value<=id); //removes each star index above selected id excluding the selected if we use(=) , if we use (<) then selected also are excluded
            setSelected(currSelected);
        }else if(!currSelected.includes(id) ){
               currSelected = [...Array(5)].map((_,currId)=> {
                   if(currId <= id)
                   {
                       return currId;
                   }
               } )
            setSelected([...currSelected]);
        }
        else{
            setSelected([...currSelected,id]);
        }

    }
     return(
    <div className="wrapper">
        {
           [...Array(5)].map((_,id)=>(
               <div className="star"    style={{ backgroundColor: selected.includes(id) ? "yellow" : "gray" }}
         onClick={()=>onStarClick(id)}>a</div>
           ))
        }
    </div>
         )
}

