import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import {Input,DatePicker} from 'antd';
import 'antd/dist/antd.css';
import Countrydropdown from './dropdown/countryDropdown';
import PhoneInput from '../components/phoneInput';




const ValidatedSignup = () => (
  <Formik
    initialValues={{firstname:"",middlename:"",lastname:"",phonenumber:"",city:"",country:"",dateofbirth:"",username:"",email:"",password:"",confirmpassword:""}}
    onSubmit = {(values,{setSubmiiting}) => {
      setTimeout(() => {
        console.log('submitting',values);
        setSubmiiting=(false)
      },500);
    }}

    validationSchema={Yup.object().shape({
      firstname: Yup.string()
      .required('First Name cannot be Empty'),
      middlename: Yup.string(),

      lastname: Yup.string()
      .required('Last Name cannot be Empty'),  
      phonenumber: Yup.number()
      .required('Phone Number cannot be Empty'),
      country: Yup.string()
      .required('Country and Region cannot be Empty'),
      dateofbirth: Yup.number()
      .required('Date of Birth cannot be Empty'),
      city: Yup.string()
      .required('City cannot be Empty'),
      email: Yup.string()
      .email()
      .required('Email can not be Empty'),
      username: Yup.string()
      .required('Username cannot be Empty'), 
      password: Yup.string()
      .required('password can not be Empty')
      .min(8,'Password is too short -- should contain 8 characters minimum')
      .matches(/(?=.*[0-9])/,'Password must contain a number') 
      .max(25,'Password mustnot exceed 25 characters') 
      .matches(/[A-Z ]+/,'password must contain an uppercase'),
      confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], "Password did not match")
    })}
  >

    {props => {
      const  {
        values,
        touched,
        handleChange,
        isSubmitting,
        handleSubmit,
        errors,
        handleBlur

      } = props ;
      


      function onChange(date, dateString) {
        console.log(date, dateString);
      }


      


      return(
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname"> Firstname </label>
          <Input
            name="firstname"
            placeholder="Enter your Firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.firstname && touched.firstname && 'error'}
          /> 
          <div style={{paddingTop:20}}>
          {errors.firstname && touched.firstname && (
            <div className="input-error" >{errors.firstname}</div>
          )}
          </div>

          <label htmlFor="middlename"> Middlename</label>
          <Input
            name="middlename"
            placeholder="Enter your Middlename"
            value={values.middlename}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.middlename && touched.middlename && 'error'}
          /> 
          <div style={{paddingTop:20}}>
          {errors.middlename && touched.middlename && (
            <div className="input-error" >{errors.middlename}</div>
          )}
          </div>

          <label htmlFor="lastname"> Lastname</label>
          <Input
            name="lastname"
            placeholder="Enter your Lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastname && touched.lastname && 'error'}
          /> 
          <div style={{paddingTop:20}}>
          {errors.lastname && touched.lastname && (
            <div className="input-error" >{errors.lastname}</div>
          )}
          </div>
          
          <label htmlFor="phonenumber"> phonenumber</label>
          <PhoneInput
             className={errors.phonenumber && touched.phonenumber && 'error'}
          />

          <div style={{paddingTop:20}}>
          {errors.phonenumber && touched.phonenumber && (
            <div className="input-error" >{errors.phonenumber}</div>
          )}
          </div>


          <Countrydropdown 
            className={errors.country && touched.country && 'error'}
            
          />
          <div style={{paddingTop:20}}>
          {errors.country && touched.country && (
            <div className="input-error" >{errors.country}</div>
          )}
          </div>

          <label htmlFor="dateofbirth">Date of Birth</label> 
          <DatePicker 
            placeholder="select your Date of Birth"
            style={{width:300}}
            onChange={onChange}
            className={errors.dateofbirth && touched.dateofbirth && 'error'}
          />


          <div style={{paddingTop:20}}>
          {errors.dateofbirth && touched.dateofbirth && (
            <div className="input-error" >{errors.dateofbirth}</div>
          )}
          </div>


          <label htmlFor="email"> Email</label>
          <Input
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && 'error'}
          />
          <div style={{paddingTop:20}}>
          {errors.email && touched.email && (
            <div className="input-error" >{errors.email}</div>
          )}
          </div>

          <label htmlFor="username"> Username</label>
          <Input
            name="username"
            placeholder="Enter your Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && 'error'}
          /> 
          <div style={{paddingTop:20}}>
          {errors.username && touched.username && (
            <div className="input-error" >{errors.username}</div>
          )}
          </div>


          <label htmlFor="password">Password</label>
          <Input.Password 
            name="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && 'error'}/> 
          <div style={{paddingTop:20}}>  
          {errors.password && touched.password && (
            <div className="input-error" >{errors.password}</div>
          )}
          </div>

          <label htmlFor="cofirmpassword">ConfirmPassword</label>
          <Input.Password 
            name="confirmpassword"
            placeholder="Re-Enter your Password"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmpassword && touched.confirmpassword && 'error'}/> 
          <div style={{paddingTop:20}}>  
          {errors.confirmpassword && touched.confirmpassword && (
            <div className="input-error" >{errors.confirmpassword}</div>
          )}
          </div>

          <button type='submit' disabled={isSubmitting} >
            SIGNUP
          </button>
           
        </form>
      );
    }}
  </Formik>
);

export default ValidatedSignup;
