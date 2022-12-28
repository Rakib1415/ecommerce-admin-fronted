import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../stores/features/authSlice';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

const initialState = {
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPass: '',
};

function SignupForm() {
  const [formState, setFormState] = useState(initialState);
  const [successfull, setSuccessfull] = useState(false);
  const { message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessfull(false);
    if (formState.password !== formState.confirmPass) {
      alert('password and confirm password does not match!');
    } else {
      const { username, email, phone, password } = formState;
      dispatch(register({ username, email, phone, password }))
        .unwrap()
        .then(() => {
          setSuccessfull(true);
        })
        .catch(() => {
          setSuccessfull(false);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        handleChange={handleChange}
        label="Username"
        value={formState?.username}
        type="text"
        name="username"
        required
      />
      <FormInput
        handleChange={handleChange}
        label="Your Email"
        value={formState?.email}
        type="email"
        name="email"
        required
      />
      <FormInput
        handleChange={handleChange}
        label="Your Phone Number"
        value={formState?.phone}
        type="text"
        name="phone"
        required
      />
      <FormInput
        handleChange={handleChange}
        label="Your Password"
        value={formState?.password}
        type="password"
        name="password"
        required
      />
      <FormInput
        handleChange={handleChange}
        label="confirm password"
        value={formState?.confirmPass}
        type="password"
        name="confirmPass"
        required
      />
      {message && (
        <div
          className={`p-4 mb-4 text-sm ${
            successfull
              ? `text-green-700 bg-green-100`
              : `text-red-700 bg-red-100`
          } rounded-lg dark:bg-green-200 dark:text-green-800`}
          role="alert"
        >
          <span className="font-medium">{message}!</span> Change a few things up
          and try submitting again.
        </div>
      )}
      <div className="w-1/2 ml-auto">
        <CustomButton type="submit">
          <span className="ml-2 font-poppins mt-5px">SIGN UP</span>
        </CustomButton>
      </div>
    </form>
  );
}

export default SignupForm;
