import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';


const ValidatedLogin = () => (
  <Formik
    initialValues={{email:"",password:""}}
    onSubmit = {(values,{setSubmiiting}) => {
      setTimeout(() => {
        console.log('submitting',values);
        setSubmiiting=(false)
      },500);
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
      .email()
      .required('Email can not be Empty'),
      password: Yup.string()
      .required('password can not be Empty')
      .min(8,'Password is too short -- should contain 8 characters minimum')
      .matches(/(?=.*[0-9])/,'Password must contain a number') 
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
      return(
        <form onSubmit={handleSubmit}>
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


          <label htmlFor="email">Password</label>
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

          <button type='submit' disabled={isSubmitting} >
            LOGIN
          </button>
          <div className="sign-hover" style={{padding:20,fontSize:20}}>or 
          <Link to="/signup" style={{paddingLeft:20,color:'black',fontSize:14}}>SIGN UP</Link>
          </div>
           
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLogin;
