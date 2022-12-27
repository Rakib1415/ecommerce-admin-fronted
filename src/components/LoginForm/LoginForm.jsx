import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => setFormState({ ...prevState, [name]: value }));
  };
  return (
    <form>
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
      <div className="w-1/2 ml-auto">
        <CustomButton type="submit">
          <span className="ml-2 font-poppins mt-5px">SIGN IN</span>
        </CustomButton>
      </div>
    </form>
  );
}

export default LoginForm;
