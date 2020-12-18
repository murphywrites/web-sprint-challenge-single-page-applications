import * as yup from "yup";

export default yup.object().shape({
    customerName: yup
      .string()
      .required("Customer Name is required")
      .min(2, "Customer Name must be 2 chars long"),
      pizzaSize: yup.string()
      .required('Must Choose Size'),
      pepperoni: yup.boolean(),
      sausage: yup.boolean(),
      onions: yup.boolean(),
      mushrooms: yup.boolean(),
      specialInstructions: yup.string()

    });