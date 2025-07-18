import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  role: Yup.string().required('Required'),
});

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values: any) => {
    console.log('Logging in with:', values);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '', role: 'Freelancer' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
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

            <button type="submit">Login</button>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            <p>Or go back to <Link to="/">Home</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
