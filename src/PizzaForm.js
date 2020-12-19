import React from "react";

const PizzaForm = (props) => {
  
const {values, orders, setOrders, setFormValues,errors, disabled, change, submit, setDisabled} = props

//////////////// HELPERS ////////////////

 //////////////// EVENT HANDLERS ////////////////

 //////////////// SIDE EFFECTS ////////////////

const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
}
const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
}


  return (
    <div className='PizzaFormContainer'>
        <div className="errors">
                <div>{errors.customerName}</div>
                <div>{errors.pizzaSize}</div>
            </div>
        <form onSubmit={onSubmit}>
            <h2>Order Form</h2>

            
            <label>
            Name: 
                <input
                    value={values.customerName}
                    onChange={onChange}
                    name="customerName"
                    type="text"
                    />
            </label>
            <label>
            Pizza Size: 
                <select value={values.pizzaSize} onChange={onChange} name="pizzaSize" type="dr">
                    <option value=''>--Select Size--</option>
                    <option value='xl'>XL</option>
                    <option value='l'>L</option>
                    <option value='m'>M</option>
                    <option value='s'>S</option>
                </select>
            </label>
            <label>
            Toppings:
            <label>
                Pepperoni
                <input
                    type="checkbox"
                    name="pepperoni"
                    // let the checkbox be checked if the value inside state resolves to true!
                    checked={values.toppings.pepperoni}
                    onChange={onChange}
                />
        </label>
        <label>
                Sausage
                <input
                    type="checkbox"
                    name="sausage"
                    // let the checkbox be checked if the value inside state resolves to true!
                    checked={values.toppings.sausage}
                    onChange={onChange}
                />
        </label>
        <label>
                Onions
                <input
                    type="checkbox"
                    name="onions"
                    // let the checkbox be checked if the value inside state resolves to true!
                    checked={values.toppings.onions}
                    onChange={onChange}
                />
        </label>
        <label>
                Mushrooms
                <input
                    type="checkbox"
                    name="mushrooms"
                    // let the checkbox be checked if the value inside state resolves to true!
                    checked={values.toppings.mushrooms}
                    onChange={onChange}
                />
        </label>
        <label>
            Special Instructions: 
                <input
                    value={values.specialInstructions}
                    onChange={onChange}
                    name="specialInstructions"
                    type="text"
                    />
            </label>
        <button disabled={disabled}>Add to Order</button>    
                
            </label>
        </form>
      <h3>Orders: </h3>
      {JSON.stringify(orders)}

  </div>
  );
};
export default PizzaForm;