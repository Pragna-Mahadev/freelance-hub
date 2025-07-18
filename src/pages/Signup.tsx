import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    role: Yup.string().required('Required'),
});

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (values: any) => {
    console.log('registering with:', values);
    navigate('/dashboard');
  };
   

  return (
    <div>
      <h2>Signup</h2>
       <Formik
              initialValues={{ email: '', password: '', role: 'Freelancer' }}
              validationSchema={SignUpSchema}
              onSubmit={handleSignup}
            >
              {() => (
                <Form>
                  <Field type="email" name="email" placeholder="Email" />
                  <div style={{ color: 'red' }}>
                      <ErrorMessage name="email" component="div" />
                  </div>
                  <br />
      
                  <Field type="password" name="password" placeholder="Password" />
                  <div style={{ color: 'red' }}>
                      <ErrorMessage name="password" component="div" />
                  </div>
                  <br />
      
                  <Field as="select" name="role">
                    <option value="Freelancer">Freelancer</option>
                    <option value="Client">Client</option>
                  </Field>
                  <div style={{ color: 'red' }}>
                      <ErrorMessage name="role" component="div" />
                  </div>
                  <br />
      
                  <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <p>Or go back to <Link to="/">Home</Link></p>


        {/* <p>Need help? <a href="/help">Help</a></p>
        <p>Contact us at <a href="mailto:support@freelancehub.com"></a></p>
        <p>Follow us on <a href="https://twitter.com/freelancehub" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://facebook.com/freelancehub" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p>© 2023 Freelance Hub. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
        <p>Version 1.0.0</p>
        <p>Last updated: October 2023</p>
        <p>For more information, visit our <a href="/about">About Us</a></p>
        <p>Check out our <a href="/blog">Blog</a></p>
        <p>Join our <a href="/community">Community</a></p>
        <p>Subscribe to our <a href="/newsletter">Newsletter</a></p>
        <p>Learn more about our <a href="/features">Features</a></p>
        <p>Explore our <a href="/pricing">Pricing</a></p>
        <p>Read our <a href="/faq">FAQ</a></p>
        <p>Watch our <a href="/tutorials">Tutorials</a></p>
        <p>Get support at <a href="/support">Support</a></p>
        <p>Follow us on <a href="https://instagram.com/freelancehub" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p>Join our <a href="/slack">Slack Community</a></p>
        <p>Connect with us on <a href="https://linkedin.com/company/freelancehub" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>Check out our <a href="/careers">Careers</a></p>
        <p>Read our <a href="/press">Press Releases</a></p>
        <p>Learn about our <a href="/mission">Mission</a></p>
        <p>Discover our <a href="/team">Team</a></p> */}
        
      </Form>
              )}
            </Formik>
          </div>
        );
      };

export default Signup;
