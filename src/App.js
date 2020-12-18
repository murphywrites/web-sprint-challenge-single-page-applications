import React, {useState , useEffect} from "react";
import {Link, Route} from "react-router-dom"
import PizzaForm from "./PizzaForm.js"
import schema from "./validation/formSchema";
import * as yup from "yup";

//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  customerName: '', //text
  pizzaSize: '', //dropdown
  toppings: '',  // checkbox (note to self: refer to hobbies example)
  specialInstructions: '' // text input
}

const initialErrors = {
  name: '', //text
  pizzaSize: '', //dropdown
  toppings: '',  // checkbox 
  specialInstructions: '' // text input
}

const initialDisabled = true;

const initialOrders = [];
 //////////////// STATES ////////////////  

 

//////////////// HELPERS ////////////////

 //////////////// EVENT HANDLERS ////////////////

 

//////////////// SIDE EFFECTS ////////////////

const NavBar = () => {
  return (
  <div className='headerContainer'>
    <header>
      <h1>Lambda Eats</h1>
      <div className='navBar'>
        <Link to="/" >Home</Link>
        <Link to="/pizza" >Get Pizza</Link>
      </div>
    </header>

  </div>
  )
}

const Home = () => {
  return (
  <div className='homeContainer'>
      <div className='splashImage'>
        <img src = "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="pizza"/>
      </div>

  </div>
  )
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] =useState(initialDisabled)
  const [orders, setOrders] = useState(initialOrders)


  const submitNewOrder = () => {
    let newOrder = {    
        name: formValues.customerName.trim(), //text
        pizzaSize: formValues.pizzaSize, //dropdown
        toppings: ['pepperoni', 'sausage', 'onions', 'mushrooms'].filter( topping => formValues[topping]),  // checkbox 
        specialInstructions: formValues.specialInstructions.trim() // text input

    }

    setFormValues(initialFormValues)
    setOrders({...orders, newOrder})
  
  }
  
  const change = (nm, val) => {
    yup
    .reach(schema, nm)
    .validate(val)
    .then( () => {
      setErrors(
        {...errors,
        [nm]: ""}
      )
    })
    .catch((err) => {
      setErrors({
        ...errors, //errors from formValues
        // validation error from schema
        [nm]: err.errors[0],
      });
    })

    setFormValues({
      ...formValues,
      [nm]: val
    })
    
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  
  return (
    <>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={(props) => <PizzaForm values={formValues} setFormValues={setFormValues}
      disabled={disabled}
      setDisabled={setDisabled}
      orders={orders}
      setOrders={setOrders}
      errors={errors}
      submit={submitNewOrder}
      change={change}/>}/>
     
    </>
  );
};
export default App;
