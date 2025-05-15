import React from "react";
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"



function Form( ) {
    const mySchema=z.object(
        {
            name:z.string().min(5,"Must be more than 5 char"),
            userPassword:z.string().max(20,"must be mor than 20"),
        }
    )
    const {register,handleSubmit,formState}=useForm(
        {
          resolver:zodResolver(mySchema)
        }
         
    )
    function save (values){
        console.log(formState.errors)
        console.log(values)
    }
   

    
  return (
    <form  onSubmit={handleSubmit(save)}>
      <input type="text" placeholder="Enter Your Name" name="userName" {...register("name")} />
      <br />
      <input
        type="text"
        placeholder="Enter your Password"
        name="userPassword"
        {...register("userPassword")}
      />
      <br />
      <input type="email" placeholder="Enter your email" {...register("email")}/>
      <br />
      
        <label htmlFor="city" {...register("city")} >choose your city  :</label>
        <select id="city" name="city" required>
          <option value="Alex">Alex</option>
          <option value="cairo">cairo</option>
          <option value="Luxor">Luxor</option>
        </select>
        <br />
        <button onClick={save}>Submit</button>
    
    </form>
  );
}

export default Form;
