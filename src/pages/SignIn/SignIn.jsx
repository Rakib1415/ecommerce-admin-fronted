import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import Spinner from '../../components/Spinner/Spinner';

function SignIn() {
  const { isLoading } = useSelector((state) => state.auth);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container min-h-screen w-screen my-12 flex items-start justify-center">
      <div className="w-1/2 flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="my-3 font-roboto text-4xl font-bold">Sign in</h1>
          <p className="text-sm font-roboto text-coolGray-600">
            Sign in to shop your desired product
          </p>
        </div>
        <LoginForm />
        <p className="px-6 my-4 font-roboto pt-6 text-sm text-center text-coolGray-600">
          Don't have an shopping account yet?
        </p>
        <p className="px-6 text-MD font-poppins text-center">
          <Link
            to="/signup"
            className="text-black underline hover:text-blue-600"
          >
            CREATE AN ACCOUNT
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
