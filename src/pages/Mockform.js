import React, { useState } from "react"
import "../form.css"
import ReducerForm from "./ReducerForm";

export default function MockForm(props) {
  // In HTML, form data is usually handled by the DOM.
  // But in React form data is usually handled by the components.
  // all the data is stored in the component state. modify by event handlers in the onChange 
  // useState Hook to keep track of each inputs value and provide a 
  // "single source of truth" for the entire application..

  // the below code follows controlled component structure as
  // every input might need use state hook
  const [name, setName] = useState("");

  const handleControlledComp = (event) => {
    //controlled componnent form submision
    event.preventDefault();
    alert(`Welcome ${name}`)
  }


  // Below example is of single state object
  // here name attribute is used to keep a track of change in every input of form
  // handleChange to update the state object of the form usign name and value
  const [formValues, setFormValues] = useState({
    subject: '',
    experience: '',
    hobby: ''
  })

  const handleSingleState = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSingleSubmission = (event) => {
    event.preventDefault();
    console.log(formValues)
  }

  return (
    <div className="container">
      <p>VALUE SET TO - {props.name}</p>
      {props.name === 'Pawan' && <form onSubmit={handleControlledComp}>
        <h2>Controlled Forms</h2>
        <label>Enter you name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
      }

      {props.name === 'Reducer' && <ReducerForm/>}

      <form onSubmit={handleSingleSubmission}>
        <h2>Single State Object</h2>
        <label>
          Enter your Subject
          <input type="text" name="subject" value={formValues.subject} onChange={handleSingleState} />
        </label>
        <label>
          Enter your Experience
          <input type="text" name="experience" value={formValues.experience} onChange={handleSingleState} />
        </label>
        <label>
          Enter your Hobby
          <input type="text" name="hobby" value={formValues.hobby} onChange={handleSingleState} />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}