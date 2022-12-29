/* eslint-disable radix */
import { useState } from 'react';
import productServices from '../../api/services/product-service';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormInput from '../../components/FormInput/FormInput';
import Spinner from '../../components/Spinner/Spinner';

const initialState = {
  title: '',
  description: '',
  imageUrl: '',
  price: 0,
  stock: 0,
};
function AdminAddProduct() {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, imageUrl, price, stock } = formState;
    const data = {
      title,
      description,
      imageUrl,
      price: parseInt(price),
      stock: parseInt(stock),
    };
    try {
      setLoading(true);
      await productServices.createProduct(data);
      setFormState(initialState);
      setError('');
      setLoading(false);
    } catch (err) {
      setError(err?.response?.data?.error?.message);
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const { title, description, imageUrl, price, stock } = formState;
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h2>Create new Product</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="title"
          name="title"
          type="text"
          value={title}
          requierd
        />
        <FormInput
          handleChange={handleChange}
          label="price"
          name="price"
          type="number"
          value={price}
          requierd
        />
        <FormInput
          handleChange={handleChange}
          label="imageUrl"
          name="imageUrl"
          type="text"
          value={imageUrl}
          requierd
        />
        <FormInput
          handleChange={handleChange}
          label="description"
          name="description"
          type="text"
          value={description}
          requierd
        />
        <FormInput
          handleChange={handleChange}
          label="stock"
          name="stock"
          type="number"
          value={stock}
          requierd
        />
        <div className="lg:w-1/3 ml-auto">
          <CustomButton type="submit">
            <span className="ml-2 mt-5px">Create Product</span>
          </CustomButton>
        </div>
        {error && <h2 className="text-center text-red-400">{error}</h2>}
      </form>
    </div>
  );
}

export default AdminAddProduct;
