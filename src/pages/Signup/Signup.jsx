import SignupForm from '../../components/SignupForm/SignupForm';

function Signup() {
  return (
    <div className="container min-h-screen w-screen my-12 flex items-start justify-center">
      <div className="w-1/2 flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="my-3 font-roboto text-4xl font-bold">Sign Up</h1>
          <p className="text-sm font-roboto text-coolGray-600">
            Sign Up to shop your desired product
          </p>
        </div>
        <SignupForm />
        <p className="px-6 my-4 font-roboto pt-6 text-sm text-center text-coolGray-600">
          You Already have an shopping account?
        </p>
        <p className="px-6 text-MD font-poppins text-center">
          <a href="#" className="text-black underline hover:text-blue-600">
            Sign In To Your Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;