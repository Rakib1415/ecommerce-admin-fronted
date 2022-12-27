import CustomButton from '../../components/CustomButton/CustomButton';
import FormInput from '../../components/FormInput/FormInput';

function AdminAddProduct() {
  return (
    <div>
      <h2>Create new Product</h2>
      <form>
        <FormInput
          handleChange={(e) => console.log(e)}
          label="title"
          type="text"
        />
        <FormInput
          handleChange={(e) => console.log(e)}
          label="price"
          type="text"
        />
        <FormInput
          handleChange={(e) => console.log(e)}
          label="imgUrl"
          type="text"
        />
        <FormInput
          handleChange={(e) => console.log(e)}
          label="description"
          type="text"
        />
        <div className="lg:w-1/3 ml-auto">
          <CustomButton type="button">
            <span className="ml-2 mt-5px">Create Product</span>
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default AdminAddProduct;
