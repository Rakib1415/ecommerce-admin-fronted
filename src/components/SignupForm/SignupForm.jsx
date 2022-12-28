import { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPass) {
      alert('password and confirm password does not match!');
    } else {
      console.log(formState);
      setFormState(initialState);
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
      <div className="w-1/2 ml-auto">
        <CustomButton type="submit">
          <span className="ml-2 font-poppins mt-5px">SIGN UP</span>
        </CustomButton>
      </div>
    </form>
  );
}

export default SignupForm;
