import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../stores/features/authSlice';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const [formState, setFormState] = useState(initialState);
  const [successfull, setSuccessfull] = useState(false);
  const { message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessfull(false);
    const { email, password } = formState;
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        setSuccessfull(true);
      })
      .catch(() => {
        setSuccessfull(false);
      });
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
        label="Your Email"
        value={formState.email}
        type="email"
        name="email"
        required
      />
      <FormInput
        handleChange={handleChange}
        label="Your Password"
        value={formState.password}
        type="password"
        name="password"
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
          <span className="ml-2 font-poppins mt-5px">SIGN IN</span>
        </CustomButton>
      </div>
    </form>
  );
}

export default LoginForm;
