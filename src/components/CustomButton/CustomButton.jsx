/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
function CustomButton({ children, inverted, ...rest }) {
  return (
    <button
      {...rest}
      className={`w-full mr-2 flex px-10 py-3 mt-6 font-medium ${
        inverted
          ? `bg-white text-black`
          : `bg-black text-white hover:bg-gray-700 focus:outline-none`
      } uppercase shadow item-center items-center justify-center focus:shadow-outline`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
