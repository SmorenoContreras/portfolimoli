import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      console.log('the validation error: ', validationErrors, validationErrors.name)

      const handleInputChange = (e) => {
        e.persist();
        const { name, value } = e.target;
      
        // Clear the error for the specific input when the user types
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '', // Clear the error for the specific input
        }));
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleBlur = (e) => {
        e.persist();
        const { name, value } = e.target;
        console.log('Input blurred:', name, value);
        validateField(name, value);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Validate all fields before form submission
        const errors = {};
        Object.keys(formData).forEach((key) => {
          validateField(key, formData[key]);
          if (validationErrors[key]) {
            errors[key] = validationErrors[key];
          }
        });
    
        // Set validation errors
        setValidationErrors(errors);
    
        // If there are no validation errors, proceed with form submission
        if (Object.keys(errors).length === 0) {
          // Perform the form submission logic here
          console.log('Form submitted:', formData);
        }
      };
    
      const validateField = (name, value) => {
        // Basic validation logic for each field
        const errors = { ...validationErrors };
    
        if (!value.trim()) {
          errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else if (name === 'email' && !isValidEmail(value)) {
          errors.email = 'Invalid email address';
        }
    
        // Set the validation errors
        setValidationErrors(errors);
      };
    
      const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    
  return (
    <div
      className="h-[100vh] overflow-hidden w-screen flex py-[80px]  px-44 flex-col gap-y-6 bg-[#f1f1f1] lg:h-[120vh] xl:h-[90vh] xl:py-[120px]"
      id="contactsSection"
    >
      <div className="flex justify-center w-full mb-10 ">
        <div>
          <h1 className="text-[40px] font-bold text-[#1e1e1e] text-center">
            Let's <span className="text-blue-600">connect.</span>{" "}
          </h1>
          <div className="bg-blue-600 h-[3px] w-[50%] justify-center flex mx-auto mt-2"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-64 gap-y-7 ">
        <div className="flex gap-x-6 w-full ">
            <div className="flex flex-col w-1/2">
            <input
            type="text"
            name="name"
            placeholder="name"
            className="input"
            value={formData.name}
            onChange={(e)=>handleInputChange(e)}
            onBlur={handleBlur}
          />
          {validationErrors.name && <p className="text-red-500">Please enter a name</p>}
            </div>
       <div className="flex flex-col w-1/2">
       <input type="email"
            name="email"
            placeholder="Email"
            className="input w-full email"
            value={formData.email}
            onChange={(e)=>handleInputChange(e)}
            onBlur={handleBlur} 
            autoCapitalize="none"
            /> 
            {validationErrors.email && <p className="text-red-500">{validationErrors.email}</p>}
       </div>
      
        </div>
        <div className="flex flex-col">
        <textarea placeholder="message" className="textarea"
         name="message"
         value={formData.message}
         onChange={(e)=>handleInputChange(e)}
         onBlur={handleBlur} 
        >
   
        </textarea>
        {validationErrors.message && <p className="text-red-500">{validationErrors.message}</p>}

        </div>
      
        <button className="btn rounded-full bg-blue-500 text-white  max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group border border-blue-500 text-[18px]">
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Lets talk
          </span>
          <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default Contacts;
