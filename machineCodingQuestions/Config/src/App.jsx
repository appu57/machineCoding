import {useState,useEffect} from 'react';
import formField from './config.json';
export default function App() {
    const [formFields , setFormFields] = useState({});
    useEffect(()=>{
       const fields = formField.form.fields.reduce((acc,curr)=>{
            acc[curr.name]="";
           return acc;
       },{});
        setFormFields(fields);
    },[formField])
    const handleForm=(e)=>{
        setFormFields((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
        console.log(formFields);
    }
    const onSubmit=()=>{
        console.log(formFields);
    }
  return (
      <div className="wrapper">
          <form >
              {formField.form.title  && <h4>{formField.form.title}</h4>}
              <div className="formFields">
                  {
                      formField.form.fields.map((field)=>{
                          //if we want to use if loop within html then use =>{} instead of =>()
                          if(field.type == 'text' || field.type == 'email' || field.type == 'password'){
                              return(
                                <div className="form">
                                    <input type={field.type}  placeholder={field.placeholder} name={field.name} onChange={(e)=>handleForm(e)} />
                                </div>
                                 )
                          }

                          if(field.type=='radio'){
                              return(
                                  <div className="radio">
                                  {
                                    field.options.map((option) => (
                                        <div className="radio-form"  key={option.value}>
                                      <input type = { field.type } value = { option.value } id={option.value} name={field.name} onChange={(e)=>handleForm(e)}/>
                                      <label htmlFor={option.value}>{option.label}</label></div>
                                    
                                  ))
                                  }
                              </div>
                              )
                          }
                          if(field.type == 'select'){
                              return(
                                  <div className ="select">
                                     <label htmlFor={field.name}
                                         >{field.label}</label>
                                      <select id={field.name} value={formFields.newsletter} onChange={(e)=>handleForm(e)} name={field.name}>
                                          {
                                              field.options.map((option)=>(
                                                  <option value={option.label}>{option.label}</option>
                                              ))
                                          }
                                      </select>
                                  </div>
                              )
                          }
                      })
                      
                     
                      }
                  

                  
              </div>
              <button onClick={onSubmit}>Submit</button>
          </form>
      </div>
  )
}

